import React, { Component } from 'react';

import Map from './components/Map/';
import ReactGoogleMaps from './components/DemoMap/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DiGO</h1>
          <ReactGoogleMaps />
        </header>
      </div>
    );
  }
}

export default App;
