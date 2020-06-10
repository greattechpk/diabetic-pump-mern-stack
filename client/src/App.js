import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Settings from './components/Settings'
import AllInsulin from './components/AllInsulin'
import NewInsulin from './components/NewInsulin'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <navbar class="navbar desktop">
        <div class="logo-container"><img class="logo" src="/syringe.jpg" alt="#"/></div>
          <nav>
            <Link to="/" class="navlink">All Deliveries</Link>
            <Link to="/nutrition" class="navlink">Nutrition</Link>
            <Link to="/settings" class="navlink">Settings</Link>
          </nav>
          <Link to="/new">
            <button>New Delivery</button>
          </Link>
    </navbar>
        
          <Switch>
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/" component={AllInsulin} />
            <Route exact path="/new" component={NewInsulin} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;