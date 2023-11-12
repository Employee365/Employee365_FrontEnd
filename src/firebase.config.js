// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4lBeTI9T8ophtM-b4wUYiaPBJKclaBwU",
  authDomain: "employee365-ac039.firebaseapp.com",
  projectId: "employee365-ac039",
  storageBucket: "employee365-ac039.appspot.com",
  messagingSenderId: "981138034723",
  appId: "1:981138034723:web:0c8bd079b6621d4ddca196",
  measurementId: "G-T2XGW59JGE"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()