

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97bgtEwIPcLtQvQjwYEccOkniTEqaWsY",
  authDomain: "juice-item-project.firebaseapp.com",
  projectId: "juice-item-project",
  storageBucket: "juice-item-project.appspot.com",
  messagingSenderId: "99394152402",
  appId: "1:99394152402:web:a6c384647a510bec5e4a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;