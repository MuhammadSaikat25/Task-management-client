// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTrQkmpIQTIX2R_rhYPXMuHBahzu5H8s4",
  authDomain: "task-manager-80cad.firebaseapp.com",
  projectId: "task-manager-80cad",
  storageBucket: "task-manager-80cad.appspot.com",
  messagingSenderId: "775616020248",
  appId: "1:775616020248:web:5103990d5b6b7737fda86d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app