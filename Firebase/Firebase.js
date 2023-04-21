import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Import the storage module

const firebaseConfig = {
  apiKey: "AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4",
  authDomain: "edushare-e9242.firebaseapp.com",
  projectId: "edushare-e9242",
  storageBucket: "edushare-e9242.appspot.com",
  messagingSenderId: "826723606155",
  appId: "1:826723606155:web:4ef2868e093bc281523e8e",
  measurementId: "G-BGCNB10FJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Get the storage instance

export { app, db, auth,storage, collection };
