import './Login.css';

function Login() {
    return (
      <div className="Login">
            <div class="container">
                <div class="login-text">
                    <h1>Login</h1>
                </div>
                <div class="login-text">
                    Are you a new member?
                </div>
                <div class="login-text">
                    <a href="../Sign_Up/Sign_Up.html">Sign Up Here</a>
                </div>
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                class="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div class="btn-group">
                            <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                            <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <div class="login-text">
                            <a href="#" class="forgot-password">Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
  }
  
  export default Login;