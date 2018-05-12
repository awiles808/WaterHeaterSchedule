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
          <h2>This Is The Results page</h2>
          <p>Time to get to get better at bootsrtap!</p>
        </Jumbotron>
        <Link to='/'>
          <Button bsStyle='primary'>Home</Button>
      </Link>
    </Grid>
    )
  }
}
