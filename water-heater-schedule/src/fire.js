import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkGmVHJAoJ-fGDp3zv3Xn1Sh8celcuw-M",
    authDomain: "water-heater-schedule.firebaseapp.com",
    databaseURL: "https://water-heater-schedule.firebaseio.com",
    projectId: "water-heater-schedule",
    storageBucket: "water-heater-schedule.appspot.com",
    messagingSenderId: "230214572469"
  };
  firebase.initializeApp(config);
var fire =firebase.initializeApp(config);
export default fire;
