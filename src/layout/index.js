import PropTypes from 'prop-types';
import React from 'react';
import TopBar from './TopBar';

const Layout = ({ children }) => (
  <>
    <TopBar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.shape(PropTypes.any).isRequired,
};

export default Layout;
