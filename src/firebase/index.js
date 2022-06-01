
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7AyNBxw-YosFBZluDTnfyNIRF53ptrIQ",
  authDomain: "vue-fira-auth.firebaseapp.com",
  projectId: "vue-fira-auth",
  storageBucket: "vue-fira-auth.appspot.com",
  messagingSenderId: "846601424954",
  appId: "1:846601424954:web:06a893139ac4dc9cc06503",
  measurementId: "G-GCVHDP5PQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};