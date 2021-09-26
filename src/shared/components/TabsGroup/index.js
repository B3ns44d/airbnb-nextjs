import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import { uniqueId } from 'lodash';
import { useState } from 'react';
import ActionTab from '../ActionTab';
import TabPanel from '../TabPanel';

const TabsGroup = ({ data, withTitles, withEffect, ...rest }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onGroupChange = (index) => setSelectedTab(index);

  return (
    <Tab.Group onChange={(index) => onGroupChange(index)}>
      <Tab.List className="flex space-x-1 rounded-xl">
        {Object.keys(data).map((category, idx) => (
          <ActionTab
            key={uniqueId(category)}
            category={category}
            idx={idx}
            selectedTab={selectedTab}
          />
        ))}
      </Tab.List>
      <Tab.Panels className="mt-0">
        {withTitles && (
          <h2 className="mt-3 p-3 font-medium text-2xl text-gray-500">
            {rest.firstTitle}
          </h2>
        )}
        {Object.values(data).map((_data) => (
          <TabPanel data={_data} key={uniqueId('id')} withEffect={withEffect} />
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

TabsGroup.propTypes = {
  data: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
  onGroupChange: PropTypes.func,
  selectedTab: PropTypes.number,
  withTitles: PropTypes.bool,
  withEffect: PropTypes.bool,
};
TabsGroup.defaultProps = {
  data: [],
  onGroupChange: () => {},
  selectedTab: 0,
  withTitles: false,
  withEffect: false,
};
export default TabsGroup;
