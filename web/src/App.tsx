import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuAppBar from './components/MenuAppBar'

import Login from './components/Login'
import Register from './components/Register'

import BetaTrackList from './components/BetaTrackList'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <MenuAppBar />
          <br />

          <div className="container">
            <Route path="/" exact component={BetaTrackList} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
