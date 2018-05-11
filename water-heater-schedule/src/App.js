import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerInfo from './components/CustomerInfo';
import Footer from './components/Footer';
import MyRoutes from './ config/Routes'
// import Routes from './ config/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <HomepageContainer /> */}
      {/* <WaterHeaterInfo /> */}
      { MyRoutes }
      {/* <CustomerInfo />
      <Footer /> */}
      </div>
    );
  }
}

export default App;
