// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2uzUYW8K-6W-TVab0P_j8UMvzsD10lcI",
  authDomain: "react-auth-d147f.firebaseapp.com",
  projectId: "react-auth-d147f",
  storageBucket: "react-auth-d147f.appspot.com",
  messagingSenderId: "442180556421",
  appId: "1:442180556421:web:5a222ffad2ac7ec9c7bbec",
  measurementId: "G-SKP59SCPXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;