import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/CustomNavbar';
import Login from '../components/Login';


class CustomerFormContainer extends Component {
	render() {
		return (
			<div>

        <Navbar />
				<Login />

			</div>

    	);
  	}
}

export default CustomerFormContainer
