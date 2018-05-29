import React from 'react';

import Map from './components/Map/';
import { getEntries } from './services/markerService';

import NavigationWrapper from './components/NavigationWrapper';

class App extends React.Component {

  render() {
      var entries = getEntries();
      console.log(entries);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DiGO</h1>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"></script>
        </header>
        <NavigationWrapper>
        </NavigationWrapper>
      </div>
    );
  }
}

export default App;
