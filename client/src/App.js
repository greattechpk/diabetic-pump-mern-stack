import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Settings from './components/Settings.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar class="navbar desktop">
        <div class="logo-container"><img class="logo" src="/syringe.jpg" alt="#"/></div>
          <nav>
            <a href="/" class="navlink">All Deliveries</a>
            <a href="/food" class="navlink">Food</a>
            <a href="/settings" class="navlink">Settings</a>
          </nav>
          <a href="/new">
            <button>New Delivery</button>
          </a>
    </navbar>
        <Router>
          <Switch>
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
