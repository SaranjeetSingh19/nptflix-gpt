// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLw8zyNkHc3JsGRxQpp5Lv7XUdAZOweMM",
  authDomain: "netflix-gpt-4b8e1.firebaseapp.com",
  projectId: "netflix-gpt-4b8e1",
  storageBucket: "netflix-gpt-4b8e1.appspot.com",
  messagingSenderId: "528814373051",
  appId: "1:528814373051:web:ff08054aebdb610601919e",
  measurementId: "G-F1FV6XL7P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();