import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';

export class TruckCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <Media>
                    <img src={this.props.truck.truckImageUrl} role="presentation" />
                    <MediaOverlay>
                        <CardTitle title={this.props.truck.name} subtitle={this.props.truck.description}>
                            <Button className="md-cell--right" icon>star_outline</Button>
                        </CardTitle>
                    </MediaOverlay>
                </Media>
                <CardTitle
                    avatar={<Avatar src={this.props.truck.truckImageUrl}  role="presentation" />}
                    title={this.props.truck.name}
                    subtitle={this.props.truck.description}
                />
                <CardActions expander>
                    <Button flat label="Action 1" />
                    <Button flat label="Action 2" />
                </CardActions>
                <CardText expandable>
                    {this.props.truck.description}
                </CardText>
            </Card>
        )
    }
};

export default TruckCard
