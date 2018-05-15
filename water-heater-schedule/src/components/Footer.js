import React, { Component } from 'react';
import CustomerBackgroundPic from '../Images/CustomerBackgroundPic.jpg';


class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {year : new Date().getFullYear()};
  }

  render() {
    return (
      <footer>
        {/* <div className="CustomerBackgroundPic" >
        <img src={ CustomerBackgroundPic } className= "photo" alt="Wood"/>
          </div> */}
        <ul className="site-link">
          <div>
            &copy; {this.state.year} Auburn Wiles
          </div>
        </ul>

      </footer>

    );
  }
}

export default Footer
