import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH4ikMKIMGqrXpDpsEUh6PCt39JQI7jXc",
  authDomain: "interview-compass-c4071.firebaseapp.com",
  projectId: "interview-compass-c4071",
  storageBucket: "interview-compass-c4071.firebasestorage.app",
  messagingSenderId: "1047508391469",
  appId: "1:1047508391469:web:24cb01b9e3efcac2a58aa4",
  measurementId: "G-FHT24XQSX2",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
