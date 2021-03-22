import React, { useState } from 'react';

import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript} from '@react-google-maps/api';
import { YOUR_API_KEY } from './config';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 24.432272, 
  lng: 90.789931
};

const Direction = ({origin, destination}) => {
    const [directionResponse, setDirectionResponse] = useState(null);
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
          
          {
              origin && destination && 
              <DirectionsService
                  // required
                  options={{ 
                    destination: destination,
                    origin: origin,
                    travelMode: "DRIVING"
                  }}
                  // required
                  callback={res => {
                      if(res !== null){
                          setDirectionResponse(res);
                      }
                  }}
                  
                />
          }
                {
                    directionResponse && 
                    
                    <DirectionsRenderer
                  // required
                  options={{ 
                    directions: directionResponse
                  }}
                  
                />
                }
        </GoogleMap>
      </LoadScript>
    );
};

export default Direction;