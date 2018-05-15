import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Homepage from '../components/Homepage';



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { names:
      [] }; // <- set up react state
  }
  componentWillMount(){
    /* Creates reference to names in Firebase Database, but need top create with email */
    let namesRef = fire.database().ref('names').orderByKey().limitToLast(100);
    namesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ names: [message].concat(this.state.names) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase..But how can I link to Firebase? */
    fire.database().ref('names').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div>
          <CustomNavbar />
      <form onSubmit={this.addMessage.bind(this)}>
        <Grid>
          <Jumbotron>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
         {/* { /* Render the list of names */
           this.state.names.map( message => <li key={message.id}>{message.text}</li> )
       }


          </Jumbotron>
        </Grid>
        <Homepage />
      </form>
    </div>
    );
  }
}

export default Form;
