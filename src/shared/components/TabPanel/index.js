import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import { uniqueId } from 'lodash';
import React from 'react';

const TabPanel = ({ data }) => (
  <Tab.Panel className="bg-white rounded-xl p-3 outline-none">
    <div className="mt-1 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-7 lg:gap-x-8">
      {data?.map(({ city, state }) => (
        <div key={uniqueId(city)}>
          <dt className="font-medium text-gray-500">{state}</dt>
          <dd className="mt-2 text-sm text-gray-400">{city}</dd>
        </div>
      ))}
    </div>
  </Tab.Panel>
);

TabPanel.propTypes = {
  data: PropTypes.shape(PropTypes.array),
};
TabPanel.defaultProps = { data: [] };
export default TabPanel;
