import PropTypes from 'prop-types';
import { memo } from 'react';

const FooterItem = ({ name, path }) => (
  <li key={name}>
    <a href={path}>
      <span
        type="button"
        className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:underline"
      >
        {name}
      </span>
    </a>
  </li>
);

FooterItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};
FooterItem.defaultProps = {
  name: '',
  path: '/',
};
export default memo(FooterItem);
