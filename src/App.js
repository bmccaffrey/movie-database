import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This should show and hide</p>
        <button>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <h1 className="App-title">{this.props.text}</h1>
    )
  }
}

export default App;
