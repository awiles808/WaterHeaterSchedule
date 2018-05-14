// import React, { Component } from 'react';
// import fire from '../fire';
// import { Link } from 'react-router-dom';
// import HeaterInfo from '../Images/HeaterInfo.jpg';
// import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
//
//
// class HeaterForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { Brands: [] }; // <- set up react state
//   }
//   componentWillMount(){
//     /* Create reference to Brands in Firebase Database */
//     let brandsRef = fire.database().ref('Brands').orderByKey().limitToLast(100);
//     brandsRef.on('child_added', snapshot => {
//       /* Update React state when Brand is added at Firebase Database */
//       let Brand = { text: snapshot.val(), id: snapshot.key };
//       this.setState({ Brands: [Brand].concat(this.state.Brands) });
//     })
//   }
//   addMessage(e){
//     e.preventDefault(); // <- prevent form submit from reloading the page
//     /* Send the Brand to Firebase */
//     fire.database().ref('Brands').push( this.inputEl.value );
//     this.inputEl.value = ''; // <- clear the input
//   }
//   render() {
//     return (
//       <div>
//       <form onSubmit={this.addMessage.bind(this)}>
//         <Grid>
//           <Jumbotron>
//         <input type="text" ref={ el => this.inputEl = el }/>
//         <input type="submit"/>
//
//
//             { /* Render the list of Brands */
//               this.state.Brands.map( Brand => <li key={Brand.id}>{Brand.text}</li> )
//             }
//
//           </Jumbotron>
//         </Grid>
//       </form>
//       <footer>
//         <div className="HeaterBackgroundPic" >
//         <img src={ HeaterInfo } className= "photo" alt="WaterSpots"/>;
//           </div>
//       </footer>
//     </div>
//     );
//   }
// }
//
// export default HeaterForm;
