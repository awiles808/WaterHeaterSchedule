import firebase from 'firebase'

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyBkGmVHJAoJ-fGDp3zv3Xn1Sh8celcuw-M",
    authDomain: "water-heater-schedule.firebaseapp.com",
    databaseURL: "https://water-heater-schedule.firebaseio.com",
    projectId: "water-heater-schedule",
    storageBucket: "water-heater-schedule.appspot.com",
    messagingSenderId: "230214572469"
  };

let fire = firebase.initializeApp(config);

export default fire

//   firebase.initializeApp(config);
// var fire =firebase.initializeApp(config);
// export default fire;
