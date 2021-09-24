import PropTypes from 'prop-types';
import React from 'react';

const ContentWrapper = ({ children, ...rest }) => (
  <main className="max-w-7xl mx-auto px-8 sm:px-16" {...rest}>
    {children}
  </main>
);

ContentWrapper.propTypes = {
  children: PropTypes.element,
};
ContentWrapper.defaultProps = {
  children: null,
};
export default ContentWrapper;
