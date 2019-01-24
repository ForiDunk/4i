import React from 'react';
import DrawerOpenButtom from '../Ui/buttons/DrawerOpenButton';
import styles from './Header.module.css';

const header = (props) => (
  <div className={styles.Header}>
    <DrawerOpenButtom /> <span className={styles.Title}>{props.children}</span>
  </div>
);

export default header;