import SectionTitle from 'shared/components/SectionTitle';
import { Tab } from '@headlessui/react';
import { apiHomePropType } from 'shared/common/propTypes';
import { uniqueId } from 'lodash';
import { useState } from 'react';
import ActionTab from 'shared/components/ActionTab';
import TabPanel from 'shared/components/TabPanel';

const FutureGetaways = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onGroupChange = (index) => setSelectedTab(index);

  return (
    <section className="pt-6 pb-8">
      <div className="pt-8">
        <SectionTitle title="Inspiration for future getaways" />
      </div>
      <div className="w-full py-1 sm:px-0 divide-y divide-light-blue-500">
        <Tab.Group onChange={(index) => onGroupChange(index)}>
          <Tab.List className="flex p-1 space-x-1 rounded-xl">
            {Object.keys(data).map((category, idx) => (
              <ActionTab
                key={uniqueId(category)}
                category={category}
                idx={idx}
                selectedTab={selectedTab}
              />
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(data).map((places) => (
              <TabPanel data={places} key={uniqueId('id')} />
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};
FutureGetaways.propTypes = { data: apiHomePropType };
FutureGetaways.defaultProps = { data: [] };
export default FutureGetaways;
