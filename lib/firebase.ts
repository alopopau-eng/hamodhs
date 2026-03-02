// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARaqbfM7Ho_9_KhKK498yLBbx4-IezrHM",
  authDomain: "bcxvb-e91f8.firebaseapp.com",
  projectId: "bcxvb-e91f8",
  storageBucket: "bcxvb-e91f8.firebasestorage.app",
  messagingSenderId: "942243696287",
  appId: "1:942243696287:web:f22830b6f9bf347849dcaa",
  measurementId: "G-3MJ7XRQ2FW"
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
