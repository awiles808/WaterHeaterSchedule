import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WaterHeaterInfo from './components/WaterHeaterInfo';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Water Heater Schedule</h1>
        </header>
      <WaterHeaterInfo />
      <Footer />
      </div>
    );
  }
}

export default App;
