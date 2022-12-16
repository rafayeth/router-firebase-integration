// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLrgdJK_VoNDtiXNjBH2A-F-CBTzUzYzE",
  authDomain: "router-firebase-intrigat-f11e1.firebaseapp.com",
  projectId: "router-firebase-intrigat-f11e1",
  storageBucket: "router-firebase-intrigat-f11e1.appspot.com",
  messagingSenderId: "819677754984",
  appId: "1:819677754984:web:d90ef81f27a5c89a7e2ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app