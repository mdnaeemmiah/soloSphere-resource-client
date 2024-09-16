// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Bp3wQLKx6pH_g64Mfrfo4Zyn73Fvd2I",
  authDomain: "dimple-firebase-ca904.firebaseapp.com",
  projectId: "dimple-firebase-ca904",
  storageBucket: "dimple-firebase-ca904.appspot.com",
  messagingSenderId: "174538790683",
  appId: "1:174538790683:web:dfa461071347cfb49fe5be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;