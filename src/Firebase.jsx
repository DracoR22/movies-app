// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiWKpxusC_5H9txC1hsl139a6q5dXSEIs",
    authDomain: "mvpmovies-56e12.firebaseapp.com",
    projectId: "mvpmovies-56e12",
    storageBucket: "mvpmovies-56e12.appspot.com",
    messagingSenderId: "970477082106",
    appId: "1:970477082106:web:fb9b0ba202b9d58fbec043"
  };



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

