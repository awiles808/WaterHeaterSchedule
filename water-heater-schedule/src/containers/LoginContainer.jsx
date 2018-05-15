import React, { Component } from 'react';
import fire, { auth, provider } from '../fire';
import Form from '../components/Form';
import Login from '../components/Login';



class LoginContainer extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });

      } else {
        this.setState({ user: null });

      }
    });
  }

  render() {
    return (
      <div className="LoginContainer">
        {this.state.user ? (<Form />) : (<Login />
          )}
      </div>
    );
  }
}

export default LoginContainer;
