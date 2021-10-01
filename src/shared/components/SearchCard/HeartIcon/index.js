import PropTypes from 'prop-types';

const HeartIcon = ({ icon: Icon }) => <Icon className="h-7 cursor-pointer" />;

HeartIcon.propTypes = {
  icon: PropTypes.element,
};
HeartIcon.defaultProps = {
  icon: null,
};
export default HeartIcon;
