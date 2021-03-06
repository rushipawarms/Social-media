// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDz7Ac5gmZfOnUoA1KoX7DvBuholhWRKeM",
//     authDomain: "reels-5766e.firebaseapp.com",
//     projectId: "reels-5766e",
//     storageBucket: "reels-5766e.appspot.com",
//     messagingSenderId: "1048706643861",
//     appId: "1:1048706643861:web:aace73c5a49edc5cf1289c",
//     measurementId: "G-5BW6HRQ8XR"
//   };


const firebaseConfig = {
  apiKey: "AIzaSyC0g-iBcHG4_taz8NHV2OR8H4USheZGLLM",
  authDomain: "insta-69007.firebaseapp.com",
  projectId: "insta-69007",
  storageBucket: "insta-69007.appspot.com",
  messagingSenderId: "1041192180455",
  appId: "1:1041192180455:web:4f16258418c9130dfc2042",
  measurementId: "G-6CN02W39ZE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
  users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),
  getTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}

export const storage=firebase.storage();