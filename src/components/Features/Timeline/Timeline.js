import React from 'react';
import TimelineColumn from '../TimelineColumn/TimelineColumn';
import TimelinePlaceholder from '../TimelinePlaceholder/TimelinePlaceholder';
import styles from './Timeline.scss';

const Timeline = () => (
  <div className={styles.component}>
    <TimelineColumn orientation='left' />
    <TimelinePlaceholder />
    <TimelinePlaceholder />
    <TimelineColumn orientation='right' />
    <TimelineColumn orientation='left' />
    <TimelinePlaceholder />
    <TimelinePlaceholder />
    <TimelineColumn orientation='right' />
    <div className={styles.line}></div>
  </div>
);

export default Timeline;