import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Settings from './components/Settings'
import AllInsulin from './components/AllInsulin'
import NewInsulin from './components/NewInsulin'
import SingleInsulin from './components/SingleInsulin'
import AllNutrition from './components/AllNutrition'
import AdminNutrition from './components/AdminNutrition'
import AdminSettings from './components/AdminSettings'
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
            <Route exact path="/new" component={NewInsulin} />
            <Route exact path='/insulin/:id' component={SingleInsulin}/>
            <Route exact path='/nutrition' component={AllNutrition}/>
            <Route exact path='/admin-nutrition' component={AdminNutrition}/>
            <Route exact path='/admin-settings' component={AdminSettings} />
            <Route exact path="/" component={AllInsulin} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;