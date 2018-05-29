import React from 'react';

import Paper from '@material-ui/core/Paper';
import MapIcon from '@material-ui/icons/Map';
import EditIcon from '@material-ui/icons/Edit';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { BottomNavigation, BottomNavigationAction, Card, CardContent } from '@material-ui/core';

class NavigationWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navState: 'map'
        }
        
        // This is done such that the render function can see the function
        this.navigate = this.navigate.bind(this);
    }

    navigate(event, value) {
        this.setState({navState: value})

    }

    render() {
        var viewToLoad = null;
        if (this.state.navState === 'map') {
            viewToLoad = <p>placeholder for map</p>
        }
        else if (this.state.navState === 'text') {
            viewToLoad = <p>placeholder for text marker entry</p>
        }
        else if (this.state.navState === 'photo') {
            viewToLoad = <p>placeholder for photo marker entry</p>
        }
        return (
            <Paper style={{width: 500}}>
                <Card>
                    <CardContent>
                        {viewToLoad}
                    </CardContent>
                </Card>
                <BottomNavigation value={this.state.navState} onChange={this.navigate} showLabels>
                    <BottomNavigationAction value="text" label="Text marker"icon={<EditIcon />}/>
                    <BottomNavigationAction value="photo" label="Photo marker" icon={<PhotoCameraIcon />}/>
                    <BottomNavigationAction value="map" label="Explore" icon={<MapIcon />}/>
                </BottomNavigation>
            </Paper>
        );
    }
}

export default NavigationWrapper;