import React from 'react';
import styles from './styles/App.scss';
import Home from './components/Views/Home/HomeContainer';
import About from './components/Views/About/AboutContainer';
import Skills from './components/Views/Skills/SkillsContainer';
import Contact from './components/Views/Contact/ContactContainer';
import Portfolio from './components/Views/Portfolio/PortfolioContainer';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ translateY: 200, opacity: 0 }}
        atLeave={{ translateY: 200, opacity: 0 }}
        atActive={{ translateY: 0, opacity: 1 }}
        mapStyles={styles => ({
          transform: `translateY(${styles.translateY}px)`,
          opacity: styles.opacity,
        })}
        className={styles.slideUp}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/skills' component={Skills} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;