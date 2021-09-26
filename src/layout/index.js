import { TopBarContextWrapper } from 'context/TopBarContext';
import { childrenPropType } from 'shared/common/propTypes';
import Footer from './Footer';
import TopBar from './TopBar';

const Layout = ({ children }) => (
  <>
    <TopBarContextWrapper>
      <TopBar />
    </TopBarContextWrapper>
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
