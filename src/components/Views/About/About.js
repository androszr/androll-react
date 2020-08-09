import React from 'react';
import Container from '../../Layout/Container/Container';
import Timeline from '../../Features/Timeline/TimelineContainer';
import PageTitle from '../../Common/PageTitle/PageTitle';
import styles from './About.scss';
import {ReactTitle} from 'react-meta-tags';

const About = () => (
  <div className={styles.component}>
    <ReactTitle title='About | Robert Androsz | Work experience'/>
    <Container>
      <PageTitle title='About' />
      <Timeline />
    </Container>
  </div>
);

export default About;