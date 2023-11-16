// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcg7--DAoZgJlQHHsIg6QAy4LtiXkPHN4",
  authDomain: "employee365-58873.firebaseapp.com",
  projectId: "employee365-58873",
  storageBucket: "employee365-58873.appspot.com",
  messagingSenderId: "998161673480",
  appId: "1:998161673480:web:8be8e5a23d5b73eb9510bd",
  measurementId: "G-6KDE7DNM1T"
};



// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
