import Layout from 'layout';
import HeroImage from 'layout/HeroImage';
import Head from 'next/head';
import ExploreNearby from 'containers/nearby';
import ContentWrapper from 'layout/ContentWrapper';
import { api } from 'service/httpService';
import { ENDPOINTS } from 'shared/constants';
import { apiHomePropType } from 'shared/common/propTypes';
import LiveAnyWhere from 'containers/liveanywhere';
import SpaceHosting from 'containers/hosting';
import DiscoverNewThings from 'containers/discover';
import FutureGetaways from 'containers/futuregetaways';

const Home = ({ nearbyData, liveAnyWhereData, discover, futuregetaways }) => (
  <>
    <Head>
      <title>Airbnb Clone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <HeroImage />
      <ContentWrapper>
        <ExploreNearby data={nearbyData} />
        <LiveAnyWhere data={liveAnyWhereData} />
        <SpaceHosting
          image="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn more"
        />
        <DiscoverNewThings data={discover} />
        <FutureGetaways data={futuregetaways} />
      </ContentWrapper>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  try {
    const { data: nearbyData } = await api.get(
      `${ENDPOINTS.BASE_URL}/${ENDPOINTS.NEARBYPLACES}`
    );
    const { data: liveAnyWhereData } = await api.get(
      `${ENDPOINTS.BASE_URL}/${ENDPOINTS.LIVEANYWHERE}`
    );
    const { data: discover } = await api.get(
      `${ENDPOINTS.BASE_URL}/${ENDPOINTS.DISCOVER}`
    );
    const { data: futuregetaways } = await api.get(
      `${ENDPOINTS.BASE_URL}/${ENDPOINTS.FUTUREGETAWAYS}`
    );
    return {
      props: {
        nearbyData,
        liveAnyWhereData,
        discover,
        futuregetaways,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

Home.propTypes = {
  nearbyData: apiHomePropType,
  liveAnyWhereData: apiHomePropType,
  discover: apiHomePropType,
  futuregetaways: apiHomePropType,
};
Home.defaultProps = {
  nearbyData: [],
  liveAnyWhereData: [],
  discover: [],
  futuregetaways: [],
};
export default Home;
