import Layout from 'layout';
import HeroImage from 'layout/HeroImage';
import Head from 'next/head';
import ExploreNearby from 'containers/nearby';
import ContentWrapper from 'layout/ContentWrapper';
import { api } from 'service/httpService';
import { ENDPOINTS } from 'shared/constants';
import { nearbyData as nearbyDataProps } from 'shared/common/propTypes';

const Home = ({ nearbyData }) => (
  <>
    <Head>
      <title>Airbnb Clone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <HeroImage />
      <ContentWrapper>
        <ExploreNearby data={nearbyData} />
      </ContentWrapper>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  try {
    const { data: nearbyData } = await api.get(
      `${ENDPOINTS.BASE_URL}/nearbyplaces`
    );
    return {
      props: {
        nearbyData,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

Home.propTypes = {
  nearbyData: nearbyDataProps,
};
Home.defaultProps = {
  nearbyData: [],
};
export default Home;
