import React from 'react';
import { connect } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import * as actions from '../../store/actions/actions';
import styles from './Drawer.module.css';


const drawer = (props) => (
  <SwipeableDrawer 
    open={props.open}
    onClose={props.closeDrwer}
    onOpen={props.openDrawer}
  >
    <div className={styles.Drawer}>
      <h3>Settings</h3>
    </div>
  </SwipeableDrawer>
);

const mapStateToProps = (state) => {
  return {
    open: state.openDrawer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () => dispatch(actions.openDrawer()),
    closeDrwer: () => dispatch(actions.closeDrawer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(drawer);