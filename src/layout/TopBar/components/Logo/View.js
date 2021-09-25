import PropTypes from 'prop-types';

import Image from 'next/image';

const View = ({ src }) => (
  <div className="relative flex items-center h-10 cursor-pointer my-auto pointer-events-none">
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
};
View.defaultProps = {
  src: '',
};

export default View;
