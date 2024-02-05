import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAd4V3eSA9_pUljuSJNK0EMTAyJWW7MAU",
  authDomain: "fire-base-todo-f189b.firebaseapp.com",
  projectId: "fire-base-todo-f189b",
  storageBucket: "fire-base-todo-f189b.appspot.com",
  messagingSenderId: "393340127946",
  appId: "1:393340127946:web:5bfb9a59fe5d7ba7084233"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);