import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

const ActionTab = ({ category, selectedTab, idx }) => (
  <div
    className={clsx([
      idx === selectedTab
        ? 'border-b-2 border-fuchsia-600 pb-2 border-gray-500'
        : '',
    ])}
  >
    <Tab
      className={({ selected }) =>
        clsx([
          'w-auto text-sm leading-5 p-2 font-medium text-gray-900 rounded-lg hover:bg-gray-100 active:scale-105 transition transform duration-100 ease-out',
          'outline-none',
          selected ? 'text-gray-900' : 'text-gray-400',
        ])
      }
    >
      {category}
    </Tab>
  </div>
);

ActionTab.propTypes = {
  category: PropTypes.string,
  idx: PropTypes.number,
  selectedTab: PropTypes.number,
};
ActionTab.defaultProps = {
  category: '',
  idx: 0,
  selectedTab: 0,
};
export default ActionTab;
