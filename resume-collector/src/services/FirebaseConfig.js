
// this is the firebase config for our project


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuATX-JsscjZzxwK2yaaRz92M_mPU-YNs",
  authDomain: "resume-collector-6820f.firebaseapp.com",
  projectId: "resume-collector-6820f",
  storageBucket: "resume-collector-6820f.appspot.com",
  messagingSenderId: "63472526946",
  appId: "1:63472526946:web:f8cea0e2b5326d4018933b",
  measurementId: "G-802VTJVZY3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}