// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdlvXm_xseLuHzJhAZ9t2WTQyOZtoUo2Y",
  authDomain: "oreby-frontend-29923.firebaseapp.com",
  projectId: "oreby-frontend-29923",
  storageBucket: "oreby-frontend-29923.appspot.com",
  messagingSenderId: "726678988601",
  appId: "1:726678988601:web:75c2e9467305da356b6ae8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
