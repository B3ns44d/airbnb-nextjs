import '../styles/globals.css';
import PropTypes from 'prop-types';
import { childrenPropType } from 'shared/common/propTypes';
import { AppContextWrapper } from 'context/AppContext';
import ProgressBar from '@badrap/bar-of-progress';
import { useRouter } from 'next/router';
import { PROGRESS_BAR_OPTIONS } from 'shared/constants';
import { useEffect } from 'react';

const progress = new ProgressBar(PROGRESS_BAR_OPTIONS);

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => progress.start();
    const handleStop = () => progress.finish();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <AppContextWrapper>
      <Component {...pageProps} />
    </AppContextWrapper>
  );
};
MyApp.propTypes = {
  Component: childrenPropType,
  pageProps: PropTypes.shape(PropTypes.any),
};
MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};
export default MyApp;
