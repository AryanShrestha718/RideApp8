import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD19t8AQ9S0xmcv8t46nyBLbcL0yI0ILrk",
  authDomain: "e-rider-11ab2.firebaseapp.com",
  databaseURL: "https://e-rider-11ab2-default-rtdb.firebaseio.com",
  projectId: "e-rider-11ab2",
  storageBucket: "e-rider-11ab2.appspot.com",
  messagingSenderId: "123258816798",
  appId: "1:123258816798:web:8fef1371e43d28aa29a10f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
