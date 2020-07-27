import React from 'react';
import styles from './PageTitle.scss';
import PropTypes from 'prop-types';

const PageTitle = ({title}) => (
  <div className={styles.component}>
    <h2>{title}</h2>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;