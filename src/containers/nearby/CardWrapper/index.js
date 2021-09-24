import PropTypes from 'prop-types';
import React from 'react';

const CardWrapper = ({ children, ...rest }) => (
  <div
    className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    {...rest}
  >
    {children}
  </div>
);

CardWrapper.propTypes = {
  children: PropTypes.element,
};
CardWrapper.defaultProps = {
  children: null,
};
export default CardWrapper;
