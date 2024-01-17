// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJOMcA31BtAnYFOHXX6Tc3hqird3eSuss",
  authDomain: "bike-hunter-110eb.firebaseapp.com",
  projectId: "bike-hunter-110eb",
  storageBucket: "bike-hunter-110eb.appspot.com",
  messagingSenderId: "395444736911",
  appId: "1:395444736911:web:409b4266e74c130d4cf1fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
