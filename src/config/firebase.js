// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// importing auth from firebase
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Importing FireStore
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHfvXnlWRpIEvTSrTV1ojcdAp1IfZEU_Q",
  authDomain: "fir-course-2bc35.firebaseapp.com",
  projectId: "fir-course-2bc35",
  storageBucket: "fir-course-2bc35.appspot.com",
  messagingSenderId: "816725659696",
  appId: "1:816725659696:web:1e59959603ee8e13cdddf5",
  measurementId: "G-XWMQE6S8BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const googleProvider= new GoogleAuthProvider()
export const db = getFirestore(app)
