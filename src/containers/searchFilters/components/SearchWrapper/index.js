import { childrenPropType } from 'shared/common/propTypes';

const SearchWrapper = ({ children }) => (
  <div className="hidden lg:inline-flex mb-6 space-x-3 text-gray-800 whitespace-nowrap">
    {children}
  </div>
);

SearchWrapper.propTypes = {
  children: childrenPropType,
};
SearchWrapper.defaultProps = {
  children: null,
};
export default SearchWrapper;
