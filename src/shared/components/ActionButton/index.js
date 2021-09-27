import PropTypes from 'prop-types';
import clsx from 'clsx';

const ActionButton = ({ textColor, text, onClick, ...rest }) => (
  <button
    onClick={onClick}
    type="button"
    className={clsx([
      'flex-grow hover:scale-105 transition transform duration-150 ease-out',
      textColor,
    ])}
    {...rest}
  >
    {text}
  </button>
);

ActionButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  textColor: PropTypes.string,
};
ActionButton.defaultProps = {
  onClick: () => {},
  text: '',
  textColor: 'text-red-500',
};
export default ActionButton;
