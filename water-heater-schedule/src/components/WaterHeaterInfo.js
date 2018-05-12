import React, { Component } from 'react';
import HeaterInfo from '../Images/HeaterInfo.jpg';
import '../waterheater.css';


class WaterHeaterInfo extends Component {
    constructor(props){
      super(props);
      this.state = {
        type:"",
        text: "",
        size: "",
        brand: "",
        location:"",
       }
  };
       onChangeUsername = event =>
       this.setState({
         type:event.target.value
       })
       onSubmit =event => {
         event.prevent.Default();
         this.props.submit(this.state);

       }


  render() {
    const {type,text} = this.state;
    return (
      <div className="HeaterBackgroundPic" >
      <img src={ HeaterInfo } className= "photo" alt="WaterSpots"/>;

      <div className="HeaterInfo">
        <h3>Water Heater Info</h3>
        <form>
          <div>
            <label>Type</label>
            <input  type="text"
                    value={type}
                    onChange={this.onChangeUsername}
                  />
          </div>
        <br></br>
          <div>
              <label>Size</label>
              <input type="text"></input>
          </div>
        <br></br>
          <div>
              <label>Brand</label>
              <input type="text"></input>
          </div>
        <br></br>
          <div>
              <label>Location</label>
              <input type="text"></input>
          </div>
          <br></br>
            <div>
              <label>Comments:</label>
              <textarea>{text}</textarea>
        </div> 
          <br></br>
          <input type= "submit" value="Submit" />

        </form>

    </div>
  </div>
    );
  }
}

export default WaterHeaterInfo;
