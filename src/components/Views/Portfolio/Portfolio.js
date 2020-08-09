import React from 'react';
import styles from './Portfolio.scss';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import Map from '../../Features/Map/Map';
import SelectedProject from '../../Features/SelectedProject/SelectedProject';
//import PropTypes from 'prop-types';
//import {settings} from '../../../data/dataStore';

const Portfolio = () => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='Portfolio' />
      <Map />
      <div className={styles.project}>
        <SelectedProject />
      </div>
      
    </Container>
   
  </div>
);

export default Portfolio;