import PropTypes from 'prop-types';

import Image from 'next/image';

const SpaceHosting = ({ image, title, description, buttonText }) => (
  <section className="relative py-16 cursor-pointer">
    <div className="relative h-96 min-w-[300px]">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
        alt={title}
      />
    </div>
    <div className="absolute top-44 left-12 text-white">
      <h3 className="text-4xl mb-3 w-64 ">{title}</h3>
      <p className="break-all">{description}</p>
      <button
        type="button"
        className="text-sm text-gray-900 bg-white px-4 py-2 rounded-lg mt-10"
      >
        {buttonText}
      </button>
    </div>
  </section>
);

SpaceHosting.propTypes = {
  buttonText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
SpaceHosting.defaultProps = {
  buttonText: '',
  description: '',
  image: '',
  title: '',
};
export default SpaceHosting;
