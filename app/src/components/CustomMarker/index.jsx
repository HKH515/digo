import React from 'react';

import Paper from '@material-ui/core/Paper';
import MapIcon from '@material-ui/icons/Map';
import EditIcon from '@material-ui/icons/Edit';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Image from 'material-ui-image'; 

import MapView from '../Map';

class CustomMarker extends React.Component {
    render() {
        var commonElement =
                        <CardContent style={{maxWidth: 200, padding: 2}}>
                                <Typography variant="headline">
                                    {this.props.user}
                                </Typography>
                                <Typography variant="subheading" color="textSecondary">
                                    {this.props.post}
                                </Typography>
                        </CardContent>
        if (this.props.photoMarker) {
            return (
                <Card style={{height: 300, width: 200}}>
                    {commonElement}
                        <Image src={this.props.photo} imageStyle={{padding: '0%', maxWidth: '80%', maxHeight: '80%'}}/>
                </Card>
            );
        }
        else {
            return (
                <Card>
                    {commonElement}
                </Card>
            );
        }
    }
}

export default CustomMarker;