import React, { Component } from 'react';
import Drawer from '../../components/Drawer/Drawer';
import DrawerOpenButtom from '../../components/Ui/buttons/DrawerOpenButton';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  render() {
    return (
      <>
        <Drawer />
        <div className={styles.Dashboard}>
          <DrawerOpenButtom /> <span className={styles.Title}>Dashboard</span>
        </div>
      </>
    );
  }
}

export default Dashboard;
