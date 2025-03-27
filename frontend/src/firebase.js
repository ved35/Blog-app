// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-38121.firebaseapp.com",
  projectId: "blog-38121",
  storageBucket: "blog-38121.firebasestorage.app",
  messagingSenderId: "453311037107",
  appId: "1:453311037107:web:84188668c34eec49967ac6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);