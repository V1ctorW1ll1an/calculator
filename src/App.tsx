import React, { Component } from 'react';
import './App.scss';
import Calculator from './Components/calculator/Calculator';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="Title">Calculator</h1>
          <Calculator />
        </div>
      </div>
    );
  }
}

