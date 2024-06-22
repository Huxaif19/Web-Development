// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB33Wi3yM1qGBFTsP6Tmge-uaL0dDx59mw",
  authDomain: "coding-competiton-1fc00.firebaseapp.com",
  projectId: "coding-competiton-1fc00",
  storageBucket: "coding-competiton-1fc00.appspot.com",
  messagingSenderId: "902825385424",
  appId: "1:902825385424:web:c96dc15b3dfe914a2b2dd5",
  measurementId: "G-KBHLGP4VQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth ;
