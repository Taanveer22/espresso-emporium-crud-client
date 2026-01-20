// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2QMCEbwIwuW7CG-ckC_GDtkYo5qH2Y3M",
  authDomain: "espresso-emporium-crud-faee7.firebaseapp.com",
  projectId: "espresso-emporium-crud-faee7",
  storageBucket: "espresso-emporium-crud-faee7.firebasestorage.app",
  messagingSenderId: "524865141483",
  appId: "1:524865141483:web:f28659a8c25a1e0f159cae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export
export { auth };
