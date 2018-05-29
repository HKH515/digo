import React from 'react';

import Map from './components/Map/';


class App extends React.Component {

  render() {
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
