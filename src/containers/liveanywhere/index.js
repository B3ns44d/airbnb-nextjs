import React from 'react';
import SectionTitle from 'shared/components/SectionTitle';
import { apiHomePropType } from 'shared/common/propTypes';
import HomesCard from 'shared/components/HomesCard';
import { uniqueId } from 'lodash';

const LiveAnyWhere = ({ data }) => (
  <section className="pt-6">
    <div className="pt-8">
      <SectionTitle title="Live anywhere" />
    </div>
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
      {data?.map(({ name, img }) => (
        <HomesCard key={uniqueId(name)} name={name} image={img} />
      ))}
    </div>
  </section>
);
LiveAnyWhere.propTypes = { data: apiHomePropType };
LiveAnyWhere.defaultProps = { data: [] };

export default LiveAnyWhere;
