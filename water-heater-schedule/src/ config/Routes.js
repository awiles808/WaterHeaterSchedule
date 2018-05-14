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

    <Route exact path='/' component={ CustomerFormContainer }/>
    <Route exact path='/homepage' component={ Homepage }/>
    <Route exact path='/login' component={ Login }/>
    <Route exact path='/logincontainer' component={ LoginContainer }/>
    <Route exact path='/home' component={ HomepageContainer }/>
    <Route exact path='/form' component={ Form }/>
    <Route path='/results' component={ Results }/>

  </Switch>
