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
      <div className="navbar desktop">
        <div className="logo-container"><img className="logo" src="/syringe.jpg" alt="#"/></div>
          <nav>
            <Link to="/" className="navlink">All Deliveries</Link>
            <Link to="/nutrition" className="navlink">Nutrition</Link>
            <Link to="/settings" className="navlink">Settings</Link>
          </nav>
          <Link to="/new">
            <button>New Delivery</button>
          </Link>
    </div>
        
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