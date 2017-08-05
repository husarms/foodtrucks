import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js';

class App extends Component {
    state = {trucks: []}

    componentDidMount() {
        fetch('/trucks')
            .then(res => res.json())
            .then(trucks => this.setState({ trucks }));
    }

    render() {
        return (
            <div className="App">
                <h1>Trucks</h1>
                {this.state.trucks.map(truck =>
                    <div key={truck.id}>
                        <ul className="list">
                            <li>{truck.name}</li>
                            <li>{truck.description}</li>
                            <li>{truck.locationName}</li>
                            <li>{truck.address}</li>
                            <li>{truck.latitude}</li>
                            <li>{truck.longitude}</li>
                            <li>{truck.url}</li>
                        </ul>
                    </div>
                )}
                <MapContainer/>
            </div>
        );
    }
}

export default App;