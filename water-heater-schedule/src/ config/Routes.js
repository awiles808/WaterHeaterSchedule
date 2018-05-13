import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerInfo from '../components/CustomerInfo';
import WaterHeaterInfo from '../components/WaterHeaterInfo';
import Results from '../components/Results';
import Form from '../components/Form';
import HomepageContainer from '../containers/HomepageContainer';
import HeaterForm from '../components/HeaterForm';
import HeaterFormContainer from '../containers/HeaterFormContainer';
import CustomerForm from '../components/CustomerForm';
import CustomerFormContainer from '../containers/CustomerFormContainer';
import Login from '../components/Login';
// import Navbar from '../components/CustomNavbar';
// import Homepage from '../components/Homepage';
// import {BrowserRouter as Router, Route } from 'react-router-dom';





export default
  <Switch>


    <Route exact path='/' component={ CustomerFormContainer }/>
    <Route exact path='/login' component={ Login}/>
    <Route exact path='/customer' component={ CustomerForm }/>
    <Route exact path='/heater' component={ HeaterFormContainer }/>
    <Route exact path='/home' component={ HomepageContainer }/>
    <Route exact path='/form' component={ Form }/>
    <Route path='/customer' component={ CustomerInfo }/>
    <Route path='/water' component={ WaterHeaterInfo }/>
    <Route path='/results' component={ Results }/>
    {/* <Route exact path='/nav' component={ Navbar }/> */}
    {/* <Route exact path='/' component={ Homepage }/> */}
  </Switch>
