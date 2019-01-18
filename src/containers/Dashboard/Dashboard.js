import React, { Component } from 'react';
import Drawer from '../../components/Drawer/Drawer';
import DrawerOpenButtom from '../../components/Ui/buttons/DrawerOpenButton';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Drawer />
        <div><DrawerOpenButtom /> Dashboard</div>
      </div>
    );
  }
}

export default Dashboard;
