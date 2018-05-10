import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerInfo from './components/CustomerInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Water Heater Schedule</h1>
        </header>
      <CustomerInfo />
      </div>
    );
  }
}

export default App;
