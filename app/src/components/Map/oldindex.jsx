/*import _ from "lodash";
import React from "react";
import {Helmet} from "react-helmet";
import { compose, withProps } from "recompose";
import 'snazzy-info-window/dist/snazzy-info-window.min.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker, 
  InfoWindow
} from "react-google-maps";


export class Map extends React.Component {
    render () {
        return (
            <div className="Map">
                <Helmet> {
                   // <script src="https://maps.googleapis.com/maps/api/js?key={{YOUR KEY HERE}}"></script>
                }
                </Helmet>
            </div>
        );
    }

};



const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker 
        position={{ lat: -34.397, lng: 150.644 }}
    />
     {props.isOpen && <InfoWindow defaultPosition={props.position} onCloseClick={props.handleCloseCall}>
            <h1> vsdvsvds </h1>
            <div onClick={()=>{alert('hello')}} class="wow slideInLeft"></div>
        </InfoWindow> }
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [
  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);*/
