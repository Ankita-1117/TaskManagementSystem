// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-1723b.firebaseapp.com",
  projectId: "taskmanager-1723b",
  storageBucket: "taskmanager-1723b.firebasestorage.app",
  messagingSenderId: "105874894576",
  appId: "1:105874894576:web:30242135f444fa1baa5c35",
  measurementId: "G-6M49NLKYKM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);