import React from 'react';
import Home from './containers/Home/Home';
import Moviedetail from './containers/Moviedetail/Moviedetail';
import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App () {
  return (
    <div>
      <Router className='appRouter'>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviedetail" exact component={Moviedetail} />
        </Switch>
      </Router>
    </div> 
  );
};

export default App;
