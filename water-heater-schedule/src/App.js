import React, { Component } from 'react';
import './App.css';
import CustomerInfo from './components/CustomerInfo';
import Footer from './components/Footer';
import MyRoutes from './ config/Routes'
// import Routes from './ config/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">

      { MyRoutes }

      </div>
    );
  }
}

export default App;
