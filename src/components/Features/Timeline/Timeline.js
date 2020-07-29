import React from 'react';
import TimelineColumn from '../TimelineColumn/TimelineColumnContainer';
import TimelinePlaceholder from '../TimelinePlaceholder/TimelinePlaceholder';
import styles from './Timeline.scss';

const Timeline = () => (
  <div className={styles.component}>
    <TimelineColumn position='freelance' />
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