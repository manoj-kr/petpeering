import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header className="">
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header"> <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button> <a href="#" className="navbar-brand">Petpeers</a> </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                    <ul className="nav navbar-nav">
                        <li><Link to={`/registration`}>Register</Link></li>
                        <li><Link to={`/login`}>Login</Link></li>
                        <li><Link to={`/pets`}>Pets</Link></li>
                        <li><Link to={`/save`}>Add Pet</Link></li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
    );
  }
}

export default Header;
