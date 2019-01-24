import React from 'react';
import { connect } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/actions';
import styles from './Drawer.module.css';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import SchoolRounded from '@material-ui/icons/SchoolRounded';
import InfoRounded from '@material-ui/icons/InfoRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawer = (props) => (
  <SwipeableDrawer 
    open={props.open}
    onClose={props.closeDrawer}
    onOpen={props.openDrawer}
  >
    <List className={styles.Drawer}>
      <ListItem component={Link} to={'/'} button onClick={props.closeDrawer}>
        <ListItemIcon>
          <SchoolRounded />
        </ListItemIcon>
        <ListItemText>
          Dashboard
        </ListItemText>
      </ListItem>

      <ListItem component={Link} to={'/settings'} button onClick={props.closeDrawer}>
        <ListItemIcon>
          <SettingsRounded />
        </ListItemIcon>
        <ListItemText>
          Settings
        </ListItemText>
      </ListItem>
      
      <ListItem component={Link} to={'/about'} button onClick={props.closeDrawer}>
        <ListItemIcon>
          <InfoRounded />
        </ListItemIcon>
        <ListItemText>
          About
        </ListItemText>
      </ListItem>
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
    closeDrawer: () => dispatch(actions.closeDrawer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(drawer);