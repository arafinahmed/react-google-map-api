import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { YOUR_API_KEY } from './config';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 24.432272, 
  lng: 90.789931
};
const onLoad = () => {
    console.log("object");
}
const Map = () => {
    return (
        <LoadScript
        googleMapsApiKey= {YOUR_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker
          onLoad={onLoad}
          position={center}>

          </Marker>
        </GoogleMap>
      </LoadScript>
    );
};

export default Map;