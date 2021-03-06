import React, { Component } from 'react';
import withScriptJs from 'react-google-maps/lib/withScriptjs';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import CustomMarker from '../CustomMarker';
import { getEntries } from '../../services/markerService';
import { compose, withProps, withStateHandlers } from "recompose";

const MapView = compose(
  withStateHandlers(() => ({
    isOpen: true,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: isOpen,
    })
  }),
  withScriptJs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: 64.123676, lng: -21.926255 }}
   >
  {getEntries().map((marker) => 
  
    <Marker
      key={marker.post}
      position={{ lat: marker.lat, lng: marker.lng }}
      onClick={props.onToggleOpen}
      label={marker.user[0].toUpperCase()}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <CustomMarker
                            user={marker.user}
                            post={marker.post}
                            photoMarker={marker.photoMarker}
                            photo={marker.photo}
                            key={marker.post}
                          />
      </InfoWindow>
      }
    </Marker>
  
  )}
  </GoogleMap>
);


/*const MapView = withScriptJs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >

   {getEntries().map((marker) => 
      <Marker position={{lat: marker.lat, lng: marker.lng}}>
        {props.isOpen && <CustomMarker
                            user={marker.post}
                            post={marker.post}
                            photoMarker={false}
                            key={marker.post}
                            position={{lat: marker.lat, lng: marker.lng}}
                          />
        }
      </Marker>)}
  </GoogleMap>
));*/

export default MapView;

/*class Map extends Component {
   render() {
      return (
        <div>
          <MapView
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZF3dwqCagP16AnMNr15cshITKeOvKVUQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
   }
};

export default Map;
*/
