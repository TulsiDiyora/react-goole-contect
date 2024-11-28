// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz0XWq0CfwtRG1fNCp2rqKiuPNshdvFKA",
  authDomain: "react-firebaseproject-f0683.firebaseapp.com",
  projectId: "react-firebaseproject-f0683",
  storageBucket: "react-firebaseproject-f0683.appspot.com",
  messagingSenderId: "271629298312",
  appId: "1:271629298312:web:a3eb6bee4b92e8dd308d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);