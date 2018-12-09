import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <form className="form-signin">
            <fieldset><legend>Login</legend></fieldset>
            <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
