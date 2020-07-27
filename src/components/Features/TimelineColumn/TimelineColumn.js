import React from 'react';
//import styles from './TimelineColumn.scss';
import PropTypes from 'prop-types';
//import {settings} from '../../../data/dataStore';

const TimelineColumn = ({orientation}) => (
  <div className={`${ orientation }`}>
    <p>test col</p>
  </div>
);

TimelineColumn.propTypes = {
  orientation: PropTypes.string,
};

export default TimelineColumn;