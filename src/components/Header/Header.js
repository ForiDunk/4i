import React from 'react';
import DrawerOpenButtom from '../Ui/buttons/DrawerOpenButton';
import styles from './Header.module.css';

const header = () => (
  <div>
    <DrawerOpenButtom /> <span className={styles.Title}>Dashboard</span>
  </div>
);

export default header;