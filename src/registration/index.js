import React, { Component } from 'react';

// Styles
import './index.css';

class Registration extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <form className="form-signin">
            <fieldset><legend>Register</legend></fieldset>
            <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            </div>
            <div className="form-group">
                <label htmlFor="cinputPassword">Confirm Password</label>
                <input type="password" id="cinputPassword" className="form-control" placeholder="Password" required/>
            </div>
            <button className="btn btn-primary mr10" type="submit">Submit</button>
            <button className="btn btn-primary" type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default Registration;
