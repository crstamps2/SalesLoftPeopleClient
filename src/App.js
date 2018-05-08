import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import PeoplePage from 'components/people/PeoplePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Route path='/people' component={PeoplePage} />
            </header>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
