// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfePvpZSbYPFNaRQNNyH4n56Vg5cRMBOc",
  authDomain: "antka-qr-menu.firebaseapp.com",
  projectId: "antka-qr-menu",
  storageBucket: "antka-qr-menu.appspot.com",
  messagingSenderId: "579955433042",
  appId: "1:579955433042:web:53fbf155868c39a966898b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
export {app,db,storage}