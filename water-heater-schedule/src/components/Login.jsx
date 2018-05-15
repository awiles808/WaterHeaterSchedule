import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../fire';
import '../login.css';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer'
import Homepage from './Homepage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(e) {
  e.preventDefault();
  const itemsRef = fire.database().ref('name');
  const item = {
    email: this.state.currentItem,
    password: this.state.username
  }
  itemsRef.push(item);
  this.setState({
    email: '',
    password: ''
  });
}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
      <CustomNavbar />

      <div className="col-md-8">
        <form>
          <div class="email-form-group">
            <label for="customerEmail">Customer Email</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="customerEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>

          <div class="email-form-group">
            <label for="customerPassword">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="customerPassword" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
        </form>
        <Homepage />
        </div>
      </div>
    );
  }
}
export default Login;
