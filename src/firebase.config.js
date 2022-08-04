
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDK787mB_YP5H4AZYvKcXXHFVyAFrqeweY",
  authDomain: "house-cac53.firebaseapp.com",
  projectId: "house-cac53",
  storageBucket: "house-cac53.appspot.com",
  messagingSenderId: "77392784254",
  appId: "1:77392784254:web:03872b6a165d24bbf7212f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore()