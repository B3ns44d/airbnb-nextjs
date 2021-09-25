import '../styles/globals.css';
import PropTypes from 'prop-types';
import { childrenPropType } from 'shared/common/propTypes';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.propTypes = {
  Component: childrenPropType,
  pageProps: PropTypes.shape(PropTypes.any),
};
MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};
export default MyApp;
