import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6QapTzpViWY9Q0xamWOI9D1M38Y_lpwI",
  authDomain: "home-tuition-73ffe.firebaseapp.com",
  projectId: "home-tuition-73ffe",
  storageBucket: "home-tuition-73ffe.appspot.com",
  messagingSenderId: "1063187360200",
  appId: "1:1063187360200:web:0aa3873ee2dddf7f33b8fd",
  measurementId: "G-2Y3ZVT0X8M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
