import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import TruckMarker from './TruckMarker';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapCenter: {lat: 37.535059, lng: -77.435470},
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            truck: []
        }

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.handleSelectedTruckChange = this.handleSelectedTruckChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.handleSelectedTruckChange(nextProps.truck);
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    handleSelectedTruckChange(truck){
        var markerReference = this.refs["truck-" + truck.id];
        if(markerReference === undefined){
            return;
        }
        var place = {
            truck: truck,
            name: truck.name,
            description: truck.description,
            locationName: truck.locationName,
            address: truck.address,
            url: truck.url,
            position: {lat: truck.latitude, lng: truck.longitude}
        }
        this.setState({
            mapCenter: {lat: truck.latitude, lng: truck.longitude},
            truck: truck,
            selectedPlace: place,
            activeMarker: markerReference.marker,
            showingInfoWindow: true
        });
    }

   getWidth() {
        return window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
    }

    render() {
        var zoom = 17;
        var width = this.getWidth();
        if(width < 480){
            zoom = 15;
        }
        return (
            <div className="map-container">
                <Map google={this.props.google}
                    onClick={this.onMapClicked}
                    initialCenter={this.state.mapCenter}
                    center={this.state.mapCenter}
                    zoom={zoom}
                    className="map">

                    {this.props.trucks.map(truck =>
                        <Marker onClick={this.onMarkerClick}
                            truck={truck}
                            name={truck.name}
                            description={truck.description}
                            locationName={truck.locationName}
                            address={truck.address}
                            url={truck.url}
                            position={{lat: truck.latitude, lng: truck.longitude}}
                            ref={"truck-" + truck.id}/>
                    )}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <br/>
                            <div>
                                <TruckMarker truck={this.state.selectedPlace.truck}></TruckMarker>
                            </div>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyAx6OiA3ZNM5taU3DoYdt0dIrdpwmd8PeM"
})(MapContainer)
