import React from 'react';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import styles from './Skills.scss';

const Skills = () => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='Skills' />
    </Container>
  </div>
);

export default Skills;