import React from 'react';
import styles from './TimelineColumn.scss';
//import PropTypes from 'prop-types';
import Icon from '../../Common/Icon/Icon';

const TimelineColumn = () => (
  
  <div className={styles.component}>
    <span className={styles.dates}>2019 - now</span>
    <p className={styles.company} data-target="freelance-description">Freelance <Icon name='fal fa-chevron-down'/></p>
    <div className={styles.roleDetails}>
      <ul className={styles.description}>
        <li>Consulting on web development and e-commerce related topics.</li>
        <li>Preparation and implementation of web pages and native web application.</li>
      </ul>
    </div>
  </div>
  
);

TimelineColumn.propTypes = {
  
};

export default TimelineColumn;