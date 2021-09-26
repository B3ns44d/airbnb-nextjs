import PropTypes from 'prop-types';

const ActionButton = ({
  textColor,
  text,
  onClick,
  textColorOpacity,
  ...rest
}) => (
  <button
    onClick={onClick}
    type="button"
    className={`flex-grow hover:scale-105 transition transform duration-150 ease-out text-${textColor}-${textColorOpacity}`}
    {...rest}
  >
    {text}
  </button>
);

ActionButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  textColor: PropTypes.string,
  textColorOpacity: PropTypes.string,
};
ActionButton.defaultProps = {
  onClick: () => {},
  text: '',
  textColor: '',
  textColorOpacity: '',
};
export default ActionButton;
