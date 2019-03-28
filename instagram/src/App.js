import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <h1>Hello</h1>
        </header>
      </div>
    );
  }
}

export default App;
