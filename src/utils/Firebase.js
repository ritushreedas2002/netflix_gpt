// Import the functions you need from the SDKs you need

import { getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABFmQEVKndnuGrKXkSnExxX0fZ7j_faiI",
  authDomain: "netflix-a3c1a.firebaseapp.com",
  projectId: "netflix-a3c1a",
  storageBucket: "netflix-a3c1a.appspot.com",
  messagingSenderId: "861224163084",
  appId: "1:861224163084:web:ca1034bcd85302a3a9db29",
  measurementId: "G-19QBE6QDG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();