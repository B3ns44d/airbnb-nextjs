import { childrenPropType } from 'shared/common/propTypes';

const ContentWrapper = ({ children, ...rest }) => (
  <main className="max-w-[110rem] mx-auto px-8 sm:px-16" {...rest}>
    {children}
  </main>
);

ContentWrapper.propTypes = {
  children: childrenPropType,
};
ContentWrapper.defaultProps = {
  children: null,
};
export default ContentWrapper;
