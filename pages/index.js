import Layout from 'layout';
import HeroImage from 'layout/HeroImage';
import Head from 'next/head';
import ExploreNearby from 'containers/nearby';
import ContentWrapper from 'layout/ContentWrapper';
import { ENDPOINTS, HTTP_METHODS } from 'shared/constants';
import { apiHomePropType } from 'shared/common/propTypes';
import LiveAnyWhere from 'containers/liveanywhere';
import SpaceHosting from 'containers/hosting';
import DiscoverNewThings from 'containers/discover';
import FutureGetaways from 'containers/futuregetaways';
import { query } from 'service/apiService';

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
    const nearbyData = await query({
      method: HTTP_METHODS.GET,
      url: ENDPOINTS.NEARBYPLACES,
    });
    const liveAnyWhereData = await query({
      method: HTTP_METHODS.GET,
      url: ENDPOINTS.NEARBYPLACES,
    });
    const discover = await query({
      method: HTTP_METHODS.GET,
      url: ENDPOINTS.LIVEANYWHERE,
    });
    const futuregetaways = await query({
      method: HTTP_METHODS.GET,
      url: ENDPOINTS.FUTUREGETAWAYS,
    });
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
