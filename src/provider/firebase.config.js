// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVr1ftB2HFFdn3jQq116JpwJvrYLwsbT4",
  authDomain: "career-consoling-b3522.firebaseapp.com",
  projectId: "career-consoling-b3522",
  storageBucket: "career-consoling-b3522.firebasestorage.app",
  messagingSenderId: "929788944106",
  appId: "1:929788944106:web:882c6c6bb46aa6891f0193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const authProvider = getAuth(app);

export {authProvider}