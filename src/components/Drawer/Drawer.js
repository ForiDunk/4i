import React from 'react';
import { connect } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import * as actions from '../../store/actions/actions';
import styles from './Drawer.module.css';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const drawer = (props) => (
  <SwipeableDrawer 
    open={props.open}
    onClose={props.closeDrwer}
    onOpen={props.openDrawer}
  >
    <List className={styles.Drawer}>
      <ListItem button>
        <ListItemIcon>
          <SettingsRounded />
        </ListItemIcon>
        <ListItemText>
          Settings
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
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