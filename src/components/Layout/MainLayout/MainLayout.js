import React from 'react';
import Header from '../../Layout/Header/Header';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;