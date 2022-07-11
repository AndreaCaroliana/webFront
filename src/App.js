//import React, { useState } from "react";
import React from 'react';
import './assetss/css/App.css';
import './assetss/css/index.css';
import axios from "axios";
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render ={ props =>{ <Login {...props} />}}></Route>
          <Route path="/Home" exact render={props=> { <Home {...props} />}}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
