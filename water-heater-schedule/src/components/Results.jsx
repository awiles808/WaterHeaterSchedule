import React, { Component } from 'react';
import ResultsBackgroundPic from '../Images/ResultsBackgroundPic.jpg';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../results.css';

export default class Results extends Component{
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Results</h1>

        </Jumbotron>
        <Link to='/'>
          <Button bsStyle='primary'>Home</Button>
      </Link>
    </Grid>
    )
  }
}
