import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import { uniqueId } from 'lodash';

const TabPanel = ({ data, withEffect }) => (
  <Tab.Panel className="bg-white rounded-xl p-3 outline-none cursor-pointer">
    <div className="mt-1 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-7 lg:gap-x-8">
      {data?.map(({ language, country, city, state }) => (
        <div
          key={uniqueId(language || city)}
          className={withEffect ? 'tab-panel-card-effect' : ''}
        >
          <h4 className="font-medium text-gray-500">{language || city}</h4>
          <h4 className="mt-2 text-sm text-gray-400">{country || state}</h4>
        </div>
      ))}
    </div>
  </Tab.Panel>
);

TabPanel.propTypes = {
  data: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
  withEffect: PropTypes.bool,
};
TabPanel.defaultProps = { data: [], withEffect: false };
export default TabPanel;
