import React from 'react';
import styles from './Icons.scss';
import PropTypes from 'prop-types';

const Icon = props => (

  <i className={`fas fa-${props.name}` + (props.name=='bars' ? ' ' + styles.pointer : '')}></i>
);

Icon.propTypes = {
  
  name: PropTypes.string,
};

export default Icon;
