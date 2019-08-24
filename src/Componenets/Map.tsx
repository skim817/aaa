import * as React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

interface IIprops {
  lata: number;
  lnga: number;
}

export default class Map extends React.Component<IIprops> {
  public MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: this.props.lnga, lng: this.props.lata }}
        center={{ lat: this.props.lnga, lng: this.props.lata }}
      >
        <Marker position={{ lat: this.props.lnga, lng: this.props.lata }} />
      </GoogleMap>
    ))
  );
  

  public render() {
    return (
      <div>
        <this.MapWithAMarker
        
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxnLbITe46r20XEo51dgFm8yHeHL4nzT0&callback=initMap"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: "600px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div>{this.props.lnga}</div>
      </div>
    );
  }
}
