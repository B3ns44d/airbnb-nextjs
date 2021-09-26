import PropTypes from 'prop-types';
import { SearchIcon } from '@heroicons/react/solid';

const View = ({ onUserSearchInputChange, userSearchInput }) => (
  <div className="py-2 md:shadow-sm flex items-center border-2 rounded-full">
    <input
      value={userSearchInput}
      onChange={({ target }) => onUserSearchInputChange(target)}
      type="text"
      placeholder="Where are you going?"
      className="rounded-l-full w-full flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400"
    />
    <SearchIcon className="md:mx-2 hidden md:inline-flex bg-red-400 text-white h-8 p-2 rounded-full cursor-pointer" />
  </div>
);

View.propTypes = {
  onUserSearchInputChange: PropTypes.func,
  userSearchInput: PropTypes.string,
};
View.defaultProps = {
  onUserSearchInputChange: () => {},
  userSearchInput: '',
};
export default View;
