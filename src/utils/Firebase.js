// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0_5nSBduSajIHu8z_lrUtQIemP9h5XbI",
  authDomain: "netflixgpt-b5385.firebaseapp.com",
  projectId: "netflixgpt-b5385",
  storageBucket: "netflixgpt-b5385.appspot.com",
  messagingSenderId: "966509646276",
  appId: "1:966509646276:web:d9c28b94a96cb4a3725491",
  measurementId: "G-FDDESR55HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();