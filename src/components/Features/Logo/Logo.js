import React from 'react';
import Icon from '../../Common/Icon/Icon';
import styles from './Logo.scss';

const Logo = () => (
  <div className={styles.component}>
    <p className={styles.headerName}><Icon name='code'/> Robert Androsz</p>
    <div className={styles.logoText}>
      <p>E-commerce Manager</p>
      <p>Product Manager</p>
      <p>Web Developer</p>
      <p>Data Analyst</p>
    </div>
  </div>
);

export default Logo;