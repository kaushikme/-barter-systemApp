import firebase from "firebase";
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCfhKux6jyh2nEpy1QDX3PwgGfLgceyW0o",
    authDomain: "the-worst-app-ever---kaushik.firebaseapp.com",
    databaseURL: "https://the-worst-app-ever---kaushik.firebaseio.com",
    projectId: "the-worst-app-ever---kaushik",
    storageBucket: "the-worst-app-ever---kaushik.appspot.com",
    messagingSenderId: "185682993145",
    appId: "1:185682993145:web:d96ae2713aac1c1156a728"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();