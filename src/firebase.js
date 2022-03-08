// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8NKHMaL7yAnYd94jOatR6m0EIDbd_SAw",
  authDomain: "the-mystery-market.firebaseapp.com",
  projectId: "the-mystery-market",
  storageBucket: "the-mystery-market.appspot.com",
  messagingSenderId: "331677431437",
  appId: "1:331677431437:web:c72068c158cd89269054c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;