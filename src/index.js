import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Timer1 from './Timer1';
import UseHook from './UseHook';
import UseForm from './UseForm'
import ReactHook from './ReactHook';
import 'firebase/firestore';
import firebase from 'firebase/app';


const firebaseConfig = {

  apiKey: "AIzaSyDDJ96opVF2AYKAO86NHWkitWVDs74ECos",

  authDomain: "cart-2f146.firebaseapp.com",

  projectId: "cart-2f146",

  storageBucket: "cart-2f146.appspot.com",

  messagingSenderId: "298575352084",

  appId: "1:298575352084:web:0774bcb95127bacc9df201"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


