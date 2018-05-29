import React from 'react';

import ReactGoogleMaps from './components/Map/';

import NavigationWrapper from './components/NavigationWrapper';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DiGO</h1>
        </header>
        <NavigationWrapper>
        </NavigationWrapper>
      </div>
    );
  }
}

export default App;
