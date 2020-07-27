import React from 'react';
import Container from '../../Layout/Container/Container';
import Timeline from '../../Features/Timeline/TimelineContainer';
import PageTitle from '../../Common/PageTitle/PageTitle';
import styles from './About.scss';

const About = () => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='About' />
      <Timeline />
    </Container>
  </div>
);

export default About;