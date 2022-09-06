import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "mern-7fada.firebaseapp.com",
    projectId: "mern-7fada",
    storageBucket: "mern-7fada.appspot.com",
    messagingSenderId: "452050860596",
    appId: "1:452050860596:web:bf06d7878906aa74bae861",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()