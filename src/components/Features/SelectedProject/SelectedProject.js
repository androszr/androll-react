import React from 'react';
import styles from './SelectedProject.scss';
import Icon from '../../Common/Icon/Icon';

const SelectedProject = () => (
  <div className={styles.component}>
    <div className={styles.close}><Icon name='fal fa-times'/></div>
    <h4 className={styles.projectText + ' ' + styles.projectHeader}>...</h4>
    <p className={styles.projectText + ' ' + styles.projectDescription}>Work in progress.</p>
    <div className={styles.projectGrid}>
      <div className={styles.technology}>
        <p className={styles.gridText}>Technology:</p>
        <Icon name='fab fa-html5'/>
        <Icon name='fab fa-css3-alt'/>
        <Icon name='fab fa-js'/>
        
      </div>
      <div className={styles.links}>
        <p className={styles.gridText}>Learn more:</p>
        <Icon name='fab fa-github'/>
        <Icon name='fal fa-link'/>
      </div>
    </div>
  </div>
);

export default SelectedProject;