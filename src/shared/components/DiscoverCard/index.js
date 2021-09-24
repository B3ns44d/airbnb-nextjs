import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';

const DiscoverCard = ({ name, description, imageSrc, path }) => (
  <div className="group relative">
    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <Image
        src={imageSrc}
        alt={name}
        layout="fill"
        className="w-full h-full object-center object-cover"
      />
    </div>
    <h3 className="mt-3 text-base font-semibold text-gray-900">
      <a href={path}>
        <span className="absolute inset-0" />
        {name}
      </a>
    </h3>
    <p className="text-sm text-gray-500 ">{description}</p>
  </div>
);

DiscoverCard.propTypes = {
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
};
DiscoverCard.defaultProps = {
  description: '',
  imageSrc: '',
  name: '',
  path: '',
};
export default DiscoverCard;
