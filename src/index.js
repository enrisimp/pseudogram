import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyBoKI4UkwOZYICoJv7Qjb6INAOoGKmWMvo",
    authDomain: "pseudogram-671ae.firebaseapp.com",
    projectId: "pseudogram-671ae",
    storageBucket: "pseudogram-671ae.appspot.com",
    messagingSenderId: "61343491084",
    appId: "1:61343491084:web:ea1789739597b227daba29",
    measurementId: "G-PDDBHXHBPC"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
