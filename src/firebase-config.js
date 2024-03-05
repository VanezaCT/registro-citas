// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMBBtxAmK5ovraUrCNorlEVQm8iHvRIR8",
    authDomain: "registro-citas-b9a98.firebaseapp.com",
    projectId: "registro-citas-b9a98",
    storageBucket: "registro-citas-b9a98.appspot.com",
    messagingSenderId: "316144532260",
    appId: "1:316144532260:web:a0ccc71739d88c039591b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);