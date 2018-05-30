import React, { Component } from 'react';
import withScriptJs from 'react-google-maps/lib/withScriptjs';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import CustomMarker from '../CustomMarker';
import { getEntries } from '../../services/markerService';
import { compose, withProps, withStateHandlers } from "recompose";


var a = getEntries().map((marker) => <Marker position={{lat: marker.lat, lng: marker.lng}} />)
console.log(a);

function aggregateMarkers() {
  var markerObjects = [];
  var markers = getEntries();
  for (var key in markers) {
    markerObjects.push(<CustomMarker key={key}
                               user={markers[key].user}
                               photoMarker={markers[key].photoMarker}
                               lat={markers[key].lat}
                               lng={markers[key].lng}
                               post={markers[key].post}
                               position={{lat: markers[key].lat, lng: markers[key].lng}}/>);
  }

  console.log(markerObjects);
  return markerObjects;

}


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
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  {getEntries().map((marker) => 
  
    <Marker
      key={marker.post}
      position={{ lat: marker.lat, lng: marker.lng }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <CustomMarker
                            user={marker.user}
                            post={marker.post}
                            photoMarker={marker.photoMarker}
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
