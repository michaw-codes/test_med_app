import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './Login.css';

const Login = () => {
      // State variables for email and password
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    // Get navigation function from react-router-dom
    const navigate = useNavigate();
    // Check if user is already authenticated, then redirect to home page
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
        navigate("/");
        }
    }, []);
    // Function to handle login form submission
    const login = async (e) => {
        e.preventDefault();
        // Send a POST request to the login API endpoint
        const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        });
        // Parse the response JSON
        const json = await res.json();
        if (json.authtoken) {
        // If authentication token is received, store it in session storage
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('email', email);
        // Redirect to home page and reload the window
        navigate('/');
        window.location.reload();
        } else {
        // Handle errors if authentication fails
        if (json.errors) {
            for (const error of json.errors) {
            alert(error.msg);
            }
        } else {
            alert(json.error);
        }
        }
    };
    return (
      <div className="Login">
            <div className="container">
                <div className="login-text">
                    <h1>Login</h1>
                </div>
                <div className="login-text">
                    Are you a new member?
                </div>
                <div className="login-text">
                    <a href="../Sign_Up/Sign_Up.html">Sign Up Here</a>
                </div>
                <div className="login-form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <div className="login-text">
                            <a href="#" className="forgot-password">Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
  }
  
  export default Login;