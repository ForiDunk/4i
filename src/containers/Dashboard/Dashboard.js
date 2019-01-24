import React, { Component } from 'react';
import Drawer from '../../components/Drawer/Drawer';
import Home from '../../components/Home/Home';
import Settings from '../../components/Settings/Settings';
import About from '../../components/About/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div>
        <Drawer />
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Dashboard;
