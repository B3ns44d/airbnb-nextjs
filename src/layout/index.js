import { TopBarContextWrapper } from 'context/TopBarContext';
import { childrenPropType } from 'shared/common/propTypes';
import PropTypes from 'prop-types';
// import { ModalContextWrapper } from 'context/ModalContext';
import Footer from './Footer';
import TopBar from './TopBar';
// import Modal from './Modal';

const Layout = ({ withFooter, children }) => (
  <div className="h-screen">
    <TopBarContextWrapper>
      <TopBar />
    </TopBarContextWrapper>
    {/* // TODO: fix the app modal */}
    {/* <ModalContextWrapper>
      <Modal />
    </ModalContextWrapper> */}
    {children}
    {withFooter && <Footer />}
  </div>
);

Layout.propTypes = {
  children: childrenPropType,
  withFooter: PropTypes.bool,
};
Layout.defaultProps = {
  children: null,
  withFooter: true,
};
export default Layout;
