import React from 'react';
import { connect } from 'react-redux';
import styles from './DrawerOpenButton.module.css';
import * as actions from '../../../store/actions/actions';
import MenuRounded from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';

const drawerOpenButtom = (props) => (
  <IconButton onClick={props.openDrawer} aria-label="open drawer">
    <MenuRounded className={styles.DrawerOpenButton} />
  </IconButton>
);

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () => dispatch(actions.openDrawer())
  };
}

export default connect(null, mapDispatchToProps)(drawerOpenButtom);