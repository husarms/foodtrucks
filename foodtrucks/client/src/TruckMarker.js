import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';

export class TruckMarker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardTitle
                    avatar={<Avatar src={this.props.truck.truckImageUrl}  role="presentation" />}
                    title={this.props.truck.name}
                    subtitle={this.props.truck.description}
                />
                <CardText>
                    {"@" + this.props.truck.locationName}
                </CardText>
                <Button raised primary label="See More" />
            </Card>
        )
    }
};

export default TruckMarker
