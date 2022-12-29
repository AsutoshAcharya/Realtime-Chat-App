import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC36pkvdhCUbjy4zmgJDdoFSYcQIBIp_yE",
  authDomain: "chatapp-22e98.firebaseapp.com",
  projectId: "chatapp-22e98",
  storageBucket: "chatapp-22e98.appspot.com",
  messagingSenderId: "626341378555",
  appId: "1:626341378555:web:f8942b99a750d9f382735e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
