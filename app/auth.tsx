import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged, signOut } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDfePvpZSbYPFNaRQNNyH4n56Vg5cRMBOc",
  authDomain: "antka-qr-menu.firebaseapp.com",
  projectId: "antka-qr-menu",
  storageBucket: "antka-qr-menu.appspot.com",
  messagingSenderId: "579955433042",
  appId: "1:579955433042:web:53fbf155868c39a966898b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function logIn(data: { username: string; password: string; },seterror: { (value: SetStateAction<string>): void; (arg0: any): void; }) {
  seterror("")
    const {username ,password} = data    
    const auth = getAuth();    
    signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorMessage)
  });
}

export function ifAuth(router: AppRouterInstance ) {

    const auth = getAuth();
onAuthStateChanged(auth, async (user) => {

  if (user) {
    const uid = user.uid;
    router.push('/admin')
    // ...
  } else {
    router.push('/admin/auth')
  }
})
}


export function out() {
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
