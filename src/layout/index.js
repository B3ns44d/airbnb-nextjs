import { childrenPropType } from 'shared/common/propTypes';
import Footer from './Footer';
import TopBar from './TopBar';

const Layout = ({ children }) => (
  <>
    <TopBar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: childrenPropType,
};
Layout.defaultProps = {
  children: null,
};
export default Layout;
