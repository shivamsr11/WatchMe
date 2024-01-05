import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2bB5XS9SUjq9cTaXslAgfx1qw6hbZOUA",
  authDomain: "watchme-b6bfc.firebaseapp.com",
  projectId: "watchme-b6bfc",
  storageBucket: "watchme-b6bfc.appspot.com",
  messagingSenderId: "465397935315",
  appId: "1:465397935315:web:cf6de594c070831f2df826",
  measurementId: "G-Z8FC55YRLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();