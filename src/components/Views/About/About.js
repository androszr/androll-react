import React from 'react';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import styles from './About.scss';

const About = () => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='About' />
    </Container>
  </div>
);

export default About;