import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';

const Card = ({ name, image, description, withDescription }) => (
  <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
    <div className="relative w-80 h-80 bg-white rounded-xl overflow-hidden sm:h-64">
      <Image src={image} alt={name} layout="fill" />
    </div>
    <h3 className="text-sm font-semibold mt-3 text-gray-900">{name}</h3>
    {withDescription && (
      <p className="mt-1 text-sm text-gray-500">
        <span className="absolute inset-0" />
        {description}
      </p>
    )}
  </div>
);

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  withDescription: PropTypes.bool,
};
Card.defaultProps = {
  name: '',
  image: '',
  description: '',
  withDescription: false,
};
export default Card;
