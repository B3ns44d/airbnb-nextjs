import Layout from 'layout';
import HeroImage from 'containers/HeroImage';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Airbnb Clone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <HeroImage />
    </Layout>
  </>
);
export default Home;
