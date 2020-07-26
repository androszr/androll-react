import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import About from '../About/About';
import Skills from '../Skills/Skills';
import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ translateY: 200, opacity: 0 }}
        atLeave={{ translateY: 0, opacity: 0 }}
        atActive={{ translateY: 0, opacity: 1 }}
        mapStyles={styles => ({
          transform: `translateY(${styles.translateY}px)`,
          opacity: styles.opacity,
        })}
        className={styles.slideUp}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;