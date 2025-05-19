import './Sign_Up.css';

function Sign_Up() {
    return (
      <div className="Sign_Up">
            <div class="container" style="margin-top: 5%;">
                <div class="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div class="signup-text">
                    Already a member?
                </div>
                <div class="signup-text">
                    <a href="../Login/Login.html">Login</a>
                </div>
                <div class="signup-form">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                class="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                class="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                                pattern="\d{10}"
                                title="Please enter exactly 10 digits"
                                required
                            />
                        </div>

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
                                name="password"
                                id="password"
                                class="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                required
                            />
                        </div>

                        <div class="btn-group">
                            <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                            <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
  }
  
  export default Sign_Up;