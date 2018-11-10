import * as React from 'react';
import './App.css';

import MenuAppBar from './components/MenuAppBar'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MenuAppBar />
      </div>
    );
  }
}

export default App;
