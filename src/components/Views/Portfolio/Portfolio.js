import React from 'react';
import styles from './Portfolio.scss';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
//import PropTypes from 'prop-types';
//import {settings} from '../../../data/dataStore';

const Portfolio = () => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='Portfolio' />
      
    </Container>
   
  </div>
);

export default Portfolio;