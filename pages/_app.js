import '../styles/globals.css';
import PropTypes from 'prop-types';
import { childrenPropType } from 'shared/common/propTypes';
import { AppContextWrapper } from 'context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextWrapper>
      <Component {...pageProps} />
    </AppContextWrapper>
  );
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
