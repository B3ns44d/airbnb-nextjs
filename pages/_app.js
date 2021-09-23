import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape(PropTypes.any).isRequired,
};
export default MyApp;
