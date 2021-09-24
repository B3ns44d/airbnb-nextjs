import React from 'react';
import SectionTitle from 'shared/components/SectionTitle';
import { apiHomePropType } from 'shared/common/propTypes';
import DiscoverCard from 'shared/components/DiscoverCard';
import { uniqueId } from 'lodash';

const DiscoverNewThings = ({ data }) => (
  <section className="pt-6">
    <div className="pt-8">
      <SectionTitle title="Discover things to do" />
    </div>
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      {data?.map(({ name, description, img }) => (
        <DiscoverCard
          key={uniqueId(name)}
          name={name}
          imageSrc={img}
          description={description}
        />
      ))}
    </div>
  </section>
);
DiscoverNewThings.propTypes = { data: apiHomePropType };
DiscoverNewThings.defaultProps = { data: [] };

export default DiscoverNewThings;
