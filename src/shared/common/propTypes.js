import PropTypes from 'prop-types';

export const apiHomePropType = PropTypes.oneOfType(
  PropTypes.object,
  PropTypes.array,
  PropTypes.arrayOf(PropTypes.object)
);
export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.element,
]);
