import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/CustomNavbar';
import Login from '../components/Login';
import Homepage from '../components/Homepage';
import Footer from '../components/Footer';




class CustomerFormContainer extends Component {
	render() {
		return (
			<div>

        <Navbar />
				{/* <Login /> */}
				{/* <Homepage /> */}
				<Footer />

			</div>

    	);
  	}
}

export default CustomerFormContainer
