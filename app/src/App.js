import React from 'react';

import Map from './components/Map/';
import { getEntries } from './services/markerService';

class App extends React.Component {

  render() {
      var entries = getEntries();
      console.log(entries);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DiGO</h1>
        </header>
        <Map />
      </div>
    );
  }
}

export default App;
