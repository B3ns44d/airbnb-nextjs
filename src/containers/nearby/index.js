import SectionTitle from 'shared/components/SectionTitle';
import { apiHomePropType } from 'shared/common/propTypes';
import NearbyPlacesCard from 'shared/components/NearbyPlacesCard';
import { uniqueId } from 'lodash';
import CardWrapper from './CardWrapper';

const ExploreNearby = ({ data }) => (
  <section className="pt-6">
    <SectionTitle title="Explore nearby" />
    <CardWrapper>
      {data?.map(({ location, distance, img }) => (
        <NearbyPlacesCard
          key={uniqueId(location)}
          placeName={location}
          distance={distance}
          image={img}
        />
      ))}
    </CardWrapper>
  </section>
);

ExploreNearby.propTypes = { data: apiHomePropType };
ExploreNearby.defaultProps = { data: [] };
export default ExploreNearby;
