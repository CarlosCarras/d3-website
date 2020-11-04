import GoogleMapReact from 'google-map-react';
import React from "react";
import './MapContainer.css'

const MapContainer = (props) => {
    return (
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: props.googleKey }}
                defaultZoom={1}
                defaultCenter={{lat: 29.642, lng: -82.347}}
            >
            </GoogleMapReact>
        </div>
    )
};

export default MapContainer;
