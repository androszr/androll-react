import React from 'react';
import Container from '../Container/Container';
import styles from './Header.scss';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';

const Header = ({icon}) => (
  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to='/'>
          <Logo name={icon} />
        </Link>
        <nav>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          <NavLink exact to='/about' activeClassName='active'>About</NavLink>
          <NavLink exact to='/skills' activeClassName='active'>Skills</NavLink>
          <NavLink exact to='/portfolio' activeClassName='active'>Portfolio</NavLink>
          <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
        </nav>
        
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  icon: PropTypes.string,
};

Header.defaultProps = {
  icon: settings.defaultNavIcon,
};

export default Header;