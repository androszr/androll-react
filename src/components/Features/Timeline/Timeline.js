import React from 'react';
import TimelineColumn from '../TimelineColumn/TimelineColumnContainer';
import TimelinePlaceholder from '../TimelinePlaceholder/TimelinePlaceholder';
import styles from './Timeline.scss';

const Timeline = () => (
  <div className={styles.component}>
    <TimelineColumn position='Freelance' />
    <TimelinePlaceholder />
    <TimelinePlaceholder />
    <TimelineColumn position='IKEA' preview='hidden' />
    <TimelineColumn position='Cateromarket' preview='hidden' />
    <TimelinePlaceholder />
    <TimelinePlaceholder />
    <TimelineColumn position='Media Saturn' preview='hidden' />
    <div className={styles.line}></div>
  </div>
);

export default Timeline;