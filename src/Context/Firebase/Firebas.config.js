// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZVeoY9gTXIh9Z9S-v5tmGYZ3-kHdel8",
  authDomain: "dealcraftclient.firebaseapp.com",
  projectId: "dealcraftclient",
  storageBucket: "dealcraftclient.firebasestorage.app",
  messagingSenderId: "881584814597",
  appId: "1:881584814597:web:d82aa2002091d8a2203a6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
