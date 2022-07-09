import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRtR7P-BIcs5b7zCoxj-T6SIFUnXo_Yig",
    authDomain: "twitter-clone-77792.firebaseapp.com",
    projectId: "twitter-clone-77792",
    storageBucket: "twitter-clone-77792.appspot.com",
    messagingSenderId: "541767309354",
    appId: "1:541767309354:web:8642b49ececa1b3de44b53",
    measurementId: "G-EP3JB4DEHF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;