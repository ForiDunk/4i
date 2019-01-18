import React, { Component } from 'react';
import Drawer from '../../components/Drawer/Drawer';
import Header from '../../components/Header/Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Drawer />
        <Header />
      </div>
    );
  }
}

export default Dashboard;
