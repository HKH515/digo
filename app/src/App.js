import React from 'react';

import Map from './components/Map/';
import { getEntries } from './services/markerService';

import NavigationWrapper from './components/NavigationWrapper';
import PostSubmission from './components/postSubmission';

class App extends React.Component {

  render() {
      var entries = getEntries();
      console.log(entries);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DiGO</h1>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZF3dwqCagP16AnMNr15cshITKeOvKVUQ" async defer></script>
        </header>
        <NavigationWrapper>
        </NavigationWrapper>
      </div>
    );
  }
}

export default App;
