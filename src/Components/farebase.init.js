// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE8J0aa8QyZlrO8ix5Mr79upuERoEdLs4",
  authDomain: "zayn-9e9756.firebaseapp.com",
  projectId: "zayn-9e9756",
  storageBucket: "zayn-9e9756.appspot.com",
  messagingSenderId: "169989281461",
  appId: "1:169989281461:web:c687ba00f0f6fe8e1150fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;