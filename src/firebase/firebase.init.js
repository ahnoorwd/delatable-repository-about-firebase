// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXLxDMiueiEZimaRDqM_BLR6WfHKjTc8Y",
  authDomain: "delete-juggo-ripository.firebaseapp.com",
  projectId: "delete-juggo-ripository",
  storageBucket: "delete-juggo-ripository.firebasestorage.app",
  messagingSenderId: "280702350499",
  appId: "1:280702350499:web:23e7cf9d0494b1403a7b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);