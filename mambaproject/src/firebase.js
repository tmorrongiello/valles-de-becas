import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDfBVpZPPlWjE9XmyMighHzptJJpBr5yR0",  
    authDomain: "valles-de-be.firebaseapp.com",  
    projectId: "valles-de-be",  
    storageBucket: "valles-de-be.appspot.com",  
    messagingSenderId: "471894357311",  
    appId: "1:471894357311:web:4b241ce56b5fcc0e57cf8a",  
    measurementId: "G-XTYEMG5BQC"
  
  };
  
  firebase.initializeApp(firebaseConfig)
  export const db = firebase.firestore()