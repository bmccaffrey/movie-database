import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [{
    id: 1,
    title: 'The Empire Strikes Back'
  }, {
    id: 2,
    title: 'Forest Gump'
  }, {
    id: 3,
    title: 'Fight Club'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
      </div>
    );
  }
}

export default App;
