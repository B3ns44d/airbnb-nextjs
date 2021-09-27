import PropTypes from 'prop-types';
import Image from 'next/image';

const View = ({ src, goHome }) => (
  <div
    className="relative flex items-center h-10 cursor-pointer my-auto"
    aria-hidden="true"
    onClick={goHome}
  >
    <Image
      src={src}
      layout="fill"
      alt="logo"
      objectFit="contain"
      objectPosition="left"
    />
  </div>
);

View.propTypes = {
  src: PropTypes.string,
  goHome: PropTypes.func,
};
View.defaultProps = {
  src: '',
  goHome: () => {},
};

export default View;
