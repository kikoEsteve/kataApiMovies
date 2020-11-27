import React from 'react';
import './App.css';
import Home from './containers/Home/Home'

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Moviedetail from './containers/Moviedetail/Moviedetail';
function App () {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>
              <img width="50" src="green_moviedb.png"></img>
            </td>
          </tr>
        </tbody>
      </table>
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
