import React from 'react';
import styles from './Home.scss';
//import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Home extends React.Component {
  static propTypes = {

  }
  

  render() {
    return (
      <main className={styles.component}>
        <img className={styles.image} src={settings.homeImage} alt='Palm Image Header'></img>
      </main>
    );
  }
}

export default Home;