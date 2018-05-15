import React, { Component } from 'react';
import ResultsBackgroundPic from '../Images/ResultsBackgroundPic.jpg';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../results.css';
import Homepage from './Homepage'

export default class Results extends Component{
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Results</h1>

        </Jumbotron>
        <Link to='/form'>
          <Button bsStyle='primary'>Home</Button>
      </Link>
    <Homepage />
    </Grid>
    )
  }
}
