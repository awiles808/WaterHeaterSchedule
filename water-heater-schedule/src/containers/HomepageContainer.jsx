import React, { Component } from 'react';
// import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Navbar from '../components/CustomNavbar';
import Form from '../components/Form';


class HomepageContainer extends Component {
	render() {
		return (
			<div>

        <Navbar />
        <Form />


			</div>

    	);
  	}
}

export default HomepageContainer
