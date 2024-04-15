import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function Map({ addresses }) {
  if (!addresses || addresses.length === 0) {
    return null; // Render nothing if addresses is undefined or empty
  }
  return (
    <LoadScript googleMapsApiKey="AIzaSyDy6ng37rUW88JGITKffxkLztxNcovEJBM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={addresses[0]} // Center map on the first address
        zoom={5}
      >
        {addresses.map((address, index) => (
          <Marker key={index} position={address} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
