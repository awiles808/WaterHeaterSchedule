import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Names: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to Names in Firebase Database */
    let NamesRef = fire.database().ref('Names').orderByKey().limitToLast(100);
    NamesRef.on('child_added', snapshot => {
      /* Update React state when Name is added at Firebase Database */
      let Name = { text: snapshot.val(), id: snapshot.key };
      this.setState({ Names: [Name].concat(this.state.Names) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the Name to Firebase */
    fire.database().ref('Names').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div>
      <form onSubmit={this.addMessage.bind(this)}>
        <Grid>
          <Jumbotron>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>


            { /* Render the list of Names */
              this.state.Names.map( Name => <li key={Name.id}>{Name.text}</li> )
            }

          </Jumbotron>
        </Grid>
      </form>
    </div>
    );
  }
}

export default CustomerForm;
