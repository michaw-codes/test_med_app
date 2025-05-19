import './Login.css';

function Login() {
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
                    <form>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input
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
                            <label for="password">Password</label>
                            <input
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