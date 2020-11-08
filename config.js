import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBviIrnBACJK9evMPHR7JlfSg4XWtyunB4",
    authDomain: "wireless-library-882a3.firebaseapp.com",
    databaseURL: "https://wireless-library-882a3.firebaseio.com",
    projectId: "wireless-library-882a3",
    storageBucket: "wireless-library-882a3.appspot.com",
    messagingSenderId: "518509121485",
    appId: "1:518509121485:web:806960e18158ebffc57e84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();