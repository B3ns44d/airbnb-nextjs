import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { formatedDate } from 'shared/utils';

const SearchResultHeader = ({ date, guesses, stays, location }) => {
  const { startDate, endDate } = date;

  return (
    <>
      <p className="text-sm leading-4 text-gray-900">
        {stays}+ stays · {formatedDate({ startDate, endDate })} · {guesses}{' '}
        guest
      </p>
      <h1 className="text-3xl font-semibold mt-2 mb-6">
        Stays in {capitalize(location)}
      </h1>
    </>
  );
};

SearchResultHeader.propTypes = {
  date: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  guesses: PropTypes.string,
  stays: PropTypes.number,
  location: PropTypes.string,
};
SearchResultHeader.defaultProps = {
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
  guesses: '',
  stays: 0,
  location: '',
};
export default SearchResultHeader;
