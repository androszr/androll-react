import React from 'react';
import styles from './Home.scss';
//import PropTypes from 'prop-types';
import {settings} from '../../../data/dataStore';
import {ReactTitle} from 'react-meta-tags';

class Home extends React.Component {
  static propTypes = {

  }
  

  render() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    return (
      <main className={styles.component}>
        <ReactTitle title='Robert Androsz - E-commerce, Product and Web Development, Data Science'/>
        <div className={styles.wave}>
          <img className={styles.image} src={settings.homeImage} alt='Palm Image Header'></img>
        </div>
      </main>
    );
  }
}

export default Home;