// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBYTxEt2_lwh3ylQ6-suQT4cpp46UXuz8",
  authDomain: "nhts-e699c.firebaseapp.com",
  projectId: "nhts-e699c",
  storageBucket: "nhts-e699c.appspot.com",
  messagingSenderId: "825789208149",
  appId: "1:825789208149:web:ab11f31218ca8b3f8ee6dc",
  measurementId: "G-GXBZLJB3S2",
  databaseURL: "https://nhts-e699c-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//database reference
export const database = getDatabase(app);
const analytics = getAnalytics(app);