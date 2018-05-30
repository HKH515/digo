import React from 'react';

import Paper from '@material-ui/core/Paper';
import MapIcon from '@material-ui/icons/Map';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { BottomNavigation, BottomNavigationAction, Card, CardContent } from '@material-ui/core';
import PostSubmission from "../postSubmission";
import FeedView from "../feedView";
import MapView from '../Map';

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
            viewToLoad = 
            <MapView
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZF3dwqCagP16AnMNr15cshITKeOvKVUQ&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `750px` }} />}
                mapElement={<div style={{ height: `101%`, width: `111%`, margin: `-5%`}} />}
            />
        }
        else if (this.state.navState === 'text') {
            viewToLoad = <PostSubmission/>;
        }
        else if (this.state.navState === 'photo') {
            viewToLoad = <p>placeholder for photo marker entry</p>
        }
        else if (this.state.navState === 'feed') {
            viewToLoad = <FeedView />;
        }
        return (
            <Paper style={{width: 500, margin: '0 auto'}}>
                <Card style={{height: 750, backgroundColor: '#FFFFFF'}}>
                    <CardContent>
                        {viewToLoad}
                    </CardContent>
                </Card>
                <BottomNavigation value={this.state.navState} style={{backgroundColor: '#55DD88'}} onChange={this.navigate} showLabels>
                    <BottomNavigationAction value="text" icon={<EditIcon />}/>
                    /*<BottomNavigationAction value="photo"  icon={<PhotoCameraIcon />}/>*/
                    <BottomNavigationAction value="map" icon={<MapIcon/>}/>

                    <BottomNavigationAction value="feed" icon={<ListIcon />}/>
                </BottomNavigation>
            </Paper>
        );
    }
}

export default NavigationWrapper;
