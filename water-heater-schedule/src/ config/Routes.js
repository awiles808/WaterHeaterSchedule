import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import CustomerInfo from '../components/CustomerInfo';
import WaterHeaterInfo from '../components/WaterHeaterInfo';





export default (
  <Switch>
    <Route exact path='/' component={ Homepage }/>
    <Route path='/customer' component={ CustomerInfo }/>
    <Route path='/water' component={ WaterHeaterInfo }/>
  </Switch>
)
