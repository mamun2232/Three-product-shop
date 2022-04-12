// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJvhAskIwr0zQTWUMSBZUhJJSr7dYD69Q",
  authDomain: "three-product-shop.firebaseapp.com",
  projectId: "three-product-shop",
  storageBucket: "three-product-shop.appspot.com",
  messagingSenderId: "621256806695",
  appId: "1:621256806695:web:d08a23bdd66970d3351902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth