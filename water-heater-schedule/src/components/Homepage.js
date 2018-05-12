import React, { Component } from 'react';
import HomePageBacPic from '../Images/HomePageBacPic.jpg';
import '../homepage.css';


class Homepage extends Component {

  constructor(props){
    super(props);
    this.state = {
      username:"",
      text: ""
     }
  };
     onChangeUsername = event =>
     this.setState({
       username:event.target.value
     })
     onSubmit =event => {
       event.prevent.Default();
       this.props.submit(this.state);
     }


  render() {
    const {username,text} = this.state;
    return (
      <div className="Home" >
      <img src={ HomePageBacPic } className= "photo" alt="BrickWood"/>
      <div className="CustomerInfo">
        <h3>Search Customer</h3>
        <form>
          <div>
            <label>Name</label>
            <input  type="text"
                    value={username}
                    onChange={this.onChangeUsername}
              />
          </div>
        <br></br>
          <div>
            <label>Address</label>
            <input type="text"></input>
          </div>
        <br></br>
          <div>
            <label>Phone</label>
            <input type="text"></input>
          </div>
        <br></br>
          <div>
            <label>Email</label>
            <input type="text"></input>
          </div>
          <br></br>


          <input type= "submit" value="Submit" />
        </form>
    </div>
      </div>
    )
  }
}

export default Homepage;
