import React, { Component } from 'react';
import TruckCard from './TruckCard';

export class TruckGallery extends Component {
    constructor(props) {
        super(props);

        // binding this to event-handler functions
    }
    render() {
        return (
            <div className="md-grid">
                {this.props.trucks.map(truck =>
                    <div className="md-cell">
                        <TruckCard truck={truck}>
                        </TruckCard>
                    </div>
                )}
            </div>
        )
    }
};

export default TruckGallery
