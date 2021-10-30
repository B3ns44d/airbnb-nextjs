import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { configs } from 'shared/configs';
import { MAPBOX } from 'shared/constants';
import { getCenter } from 'geolib';
import { uniqueId } from 'lodash';
import { LocationMarkerIcon } from '@heroicons/react/solid';

const SearchMap = ({ mapLocation }) => {
  const { longitude, latitude } = getCenter(mapLocation);
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(_viewport) => setViewport(_viewport)}
      mapStyle={MAPBOX.mapStyle}
      mapboxApiAccessToken={configs.mapbox_public_key}
    >
      {mapLocation.map((location) => (
        <div key={uniqueId(location.longitude)}>
          <Marker
            longitude={location.longitude}
            latitude={location.latitude}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <LocationMarkerIcon className="cursor-pointer animate-pulse w-10 h-10 text-[#FD5B61]" />
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};

SearchMap.propTypes = {
  mapLocation: PropTypes.shape(PropTypes.arrayOf(PropTypes.object)),
};
SearchMap.defaultProps = {
  mapLocation: [],
};
export default SearchMap;
