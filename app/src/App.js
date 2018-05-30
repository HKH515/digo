import React from 'react';

import Map from './components/Map/';
import { getEntries } from './services/markerService';

import NavigationWrapper from './components/NavigationWrapper';
import PostSubmission from './components/postSubmission';

import AppBar from '@material-ui/core/AppBar';

import './normalize.css';
import './App.css';
import { Toolbar, Typography } from '@material-ui/core';

class App extends React.Component {

  render() {
      var entries = getEntries();
      console.log(entries);
    return (
      <div className="App">
        <AppBar position="static" color="#55DD88" style={{width: '750'}}>
          <Toolbar>
            <Typography variant="title" color="inherit" align="center">DiGO</Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZF3dwqCagP16AnMNr15cshITKeOvKVUQ" async defer></script>
        </header>
        <NavigationWrapper>
        </NavigationWrapper>
      </div>
    );
  }
}

export default App;
