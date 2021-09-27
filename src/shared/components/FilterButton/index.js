import PropTypes from 'prop-types';

const FilterButton = ({ name, onFilterClick, ...rest }) => (
  <button
    type="button"
    onClick={onFilterClick}
    className="outline-none"
    {...rest}
  >
    <p className="filters-btn">{name}</p>
  </button>
);

FilterButton.propTypes = {
  name: PropTypes.string,
  onFilterClick: PropTypes.func,
};

FilterButton.defaultProps = {
  name: '',
  onFilterClick: () => {},
};

export default FilterButton;
