import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends Component {
  mapStyles = {
    height: "200px",
    width: "250px",
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={this.mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lon }}
      >
        <Marker
          position={{ lat: this.props.lat + 0.1, lng: this.props.lon + 0.1 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCIOp63pP1GzkZC0-_epgdGo_n-_4klflI",
})(GoogleMap);
