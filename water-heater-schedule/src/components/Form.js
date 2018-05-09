import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h3>Customer Info</h3>
        <form>
          <div>
            <label>Name</label>
            <input type="text"></input>
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
        </form>
      </div>
    );
  }
}

export default Form;
