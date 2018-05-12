import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import CustomerInfo from '../components/CustomerInfo';
import WaterHeaterInfo from '../components/WaterHeaterInfo';
import Results from '../components/Results';





export default (
  <Switch>
    <Route exact path='/' component={ Homepage }/>
    <Route path='/customer' component={ CustomerInfo }/>
    <Route path='/water' component={ WaterHeaterInfo }/>
    <Route path='/results' component={ Results }/>
  </Switch>
)
