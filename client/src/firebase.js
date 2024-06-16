// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "preet-estate.firebaseapp.com",
  projectId: "preet-estate",
  storageBucket: "preet-estate.appspot.com",
  messagingSenderId: "1046965037824",
  appId: "1:1046965037824:web:c050186f3796a9452061e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);