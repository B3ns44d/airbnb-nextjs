import PropTypes from 'prop-types';

const SectionTitle = ({ title, ...rest }) => (
  <h2 className="text-4xl font-semibold pb-5" {...rest}>
    {title}
  </h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};
SectionTitle.defaultProps = {
  title: '',
};
export default SectionTitle;
