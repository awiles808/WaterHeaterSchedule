import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Results from '../components/Results';
import Form from '../components/Form';
import HomepageContainer from '../containers/HomepageContainer';
import Login from '../components/Login';
import LoginContainer from '../containers/LoginContainer';
import Homepage from '../components/Homepage';
import CustomerFormContainer from '../containers/CustomerFormContainer';







export default
  <Switch>

    <Route exact path='/CustomerFormContainer' component={ CustomerFormContainer }/>
    <Route exact path='/Homepage' component={ Homepage }/>
    <Route exact path='/Login' component={ Login }/>
    <Route exact path='/' component={ LoginContainer }/>
    <Route exact path='/HomepageContainer' component={ HomepageContainer }/>
    <Route exact path='/form' component={ Form }/>
    <Route path='/results' component={ Results }/>

  </Switch>
