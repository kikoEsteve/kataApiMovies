import React from 'react';
import './App.css';
import Home from './containers/Home/Home'

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Moviedetail from './containers/Moviedetail/Moviedetail';
function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Moviedetail" exact component={Moviedetail} />
        </Switch>
      </Router>
    </div> 
  );
};

export default App;
