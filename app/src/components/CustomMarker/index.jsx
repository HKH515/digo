import React from 'react';

import Paper from '@material-ui/core/Paper';
import MapIcon from '@material-ui/icons/Map';
import EditIcon from '@material-ui/icons/Edit';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import MapView from '../Map';

class CustomMarker extends React.Component {
    render() {
        var commonElement =
                        <CardContent>
                                <Typography variant="headline">
                                    {this.props.user}
                                </Typography>
                                <Typography variant="subheading" color="textSecondary">
                                    {this.props.post}
                                </Typography>
                        </CardContent>
        if (this.props.photoMarker) {
            return (
                <Card>
                    <CardMedia image={this.props.photo}/>
                    {commonElement}
                </Card>
            );
        }
        else {
            return (
                <Card>
                    <CardMedia image={this.props.photo}/>
                    {commonElement}
                </Card>
            );
        }
    }
}

export default CustomMarker;