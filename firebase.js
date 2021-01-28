import * as firebase from 'firebase'
import 'firebase/auth';

//import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYAALUHgJqP23NeyMupvyEcJSm1x0CZic",
    authDomain: "scheduler-327d9.firebaseapp.com",
    databaseURL: "https://scheduler-327d9.firebaseio.com",
    projectId: "scheduler-327d9",
    storageBucket: "scheduler-327d9.appspot.com",
    messagingSenderId: "128733522084",
    appId: "1:128733522084:web:b87013e26e6063e2b71e31",
    measurementId: "G-6Z3BX8STB3"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };