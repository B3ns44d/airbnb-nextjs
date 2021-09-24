import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';

const NearbyPlacesCard = ({ placeName, distance, image, ...rest }) => (
  <div className="nearby-places-container group">
    <div className="relative h-16 w-16 bg-gray-200 rounded-lg overflow-hidden">
      <Image
        src={image}
        layout="fill"
        className="w-full h-full object-center object-cover group-hover:opacity-75"
        alt={placeName}
        {...rest}
      />
    </div>
    <div>
      <h3 className="font-medium">{placeName}</h3>
      <h2 className="text-gray-500">{distance}</h2>
    </div>
  </div>
);
NearbyPlacesCard.propTypes = {
  distance: PropTypes.string,
  image: PropTypes.string,
  placeName: PropTypes.string,
};
NearbyPlacesCard.defaultProps = {
  distance: '',
  image: '',
  placeName: '',
};
export default NearbyPlacesCard;
