// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASY0j9n5QN4MXaQlujc8dVnsNTYOz_F5E",
  authDomain: "miniproject-17afa.firebaseapp.com",
  projectId: "miniproject-17afa",
  storageBucket: "miniproject-17afa.appspot.com",
  messagingSenderId: "154684722975",
  appId: "1:154684722975:web:0c5c35c8addf579cb2aa2a",
  measurementId: "G-B8T8903R3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {auth};