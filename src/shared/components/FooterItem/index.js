import PropTypes from 'prop-types';
import Link from 'next/link';

const FooterItem = ({ name, path }) => (
  <li>
    <Link href={path} passHref>
      <span className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:underline">
        {name}
      </span>
    </Link>
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
export default FooterItem;
