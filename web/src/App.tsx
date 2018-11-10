import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuAppBar from './components/MenuAppBar'

import Login from './components/Login'
import Register from './components/Register'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <MenuAppBar />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
