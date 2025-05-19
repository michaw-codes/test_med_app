import './SignUp.css';

function SignUp() {
    return (
      <div className="SignUp">
            <div className="container" style={{marginTop: '5%'}}>
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text">
                    Already a member?
                </div>
                <div className="signup-text">
                    <a href="../Login/Login.html">Login</a>
                </div>
                <div className="signup-form">
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                                pattern="\d{10}"
                                title="Please enter exactly 10 digits"
                                required
                            />
                        </div>

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
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
  }
  
  export default SignUp;