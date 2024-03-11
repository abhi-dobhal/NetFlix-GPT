// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth }from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnFXX_b4c9-BSw2eXP7vjYq7mF03eHSM",
  authDomain: "netflix-gpt-c11d4.firebaseapp.com",
  projectId: "netflix-gpt-c11d4",
  storageBucket: "netflix-gpt-c11d4.appspot.com",
  messagingSenderId: "432721929500",
  appId: "1:432721929500:web:eb917857cda7cb8cce06d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(); //used auth method here because we want to use it in several components so we made it central