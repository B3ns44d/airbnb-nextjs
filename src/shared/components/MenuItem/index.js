import PropTypes from 'prop-types';
import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

const MenuItem = ({ path, title, ...rest }) => (
  <Menu.Item>
    {({ active }) => (
      <a
        type="button"
        href={path}
        className={clsx([
          active ? 'text-gray-500' : 'text-gray-900',
          'group flex rounded-md items-center w-full px-2 py-2 text-sm',
        ])}
        {...rest}
      >
        {title}
      </a>
    )}
  </Menu.Item>
);

MenuItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};
MenuItem.defaultProps = {
  path: '',
  title: '',
};
export default MenuItem;
