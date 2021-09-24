import React from 'react';
import { childrenPropType } from 'shared/common/propTypes';
import TopBar from './TopBar';

const Layout = ({ children }) => (
  <>
    <TopBar />
    {children}
  </>
);

Layout.propTypes = {
  children: childrenPropType.isRequired,
};

export default Layout;
