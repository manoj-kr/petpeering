import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Registration from './registration';
import Login from './login';
import Pets from './pets';
import PetSave from './pets/save';
import PetView from './pets/view';
import Logout from './logout';
import Header from './shared/header';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-md-12">
            <Header/>
          </div>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/pets" component={Pets} >
            
          </Route>
          <Route path="/save" component={PetSave} />
          <Route path="/view/:id" component={PetView} />
          <Route path="/logout" component={Logout} />
        </div>
        </Router>
    );
  }
}

export default App;
