// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXKOCS9f3QJMZQRed523JXsyIjspoERXg",
  authDomain: "chat-application-87750.firebaseapp.com",
  projectId: "chat-application-87750",
  storageBucket: "chat-application-87750.appspot.com",
  messagingSenderId: "1064205314809",
  appId: "1:1064205314809:web:175a7ee9c1e6f6090f1028",
  measurementId: "G-DWBNXB3RQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();
export const db = getFirestore(app);