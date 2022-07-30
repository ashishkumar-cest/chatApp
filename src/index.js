import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9WJ9CTcfkHy6jiXzx2myvSszATovAx9A",
  authDomain: "chatapp-cc004.firebaseapp.com",
  databaseURL: "https://chatapp-cc004-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-cc004",
  storageBucket: "chatapp-cc004.appspot.com",
  messagingSenderId: "855380313394",
  appId: "1:855380313394:web:019c612737a1b50204c32b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
