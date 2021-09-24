import PropTypes from 'prop-types';

export const apiHomePropType = PropTypes.shape(
  PropTypes.arrayOf(PropTypes.object)
);
export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);
