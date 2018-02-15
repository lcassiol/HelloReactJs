import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is my Hello ReactJS by lcassiol</h1>
        </header>
        <Product/>
      </div>
    );
  }
}

export default App;
