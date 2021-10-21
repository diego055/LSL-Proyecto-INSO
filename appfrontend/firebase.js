import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjzgrd57VOPJB79QyRF00KyQRt8moqI7M",
  authDomain: "app-denuncias-faf81.firebaseapp.com",
  projectId: "app-denuncias-faf81",
  storageBucket: "app-denuncias-faf81.appspot.com",
  messagingSenderId: "508427894352",
  appId: "1:508427894352:web:4a2eab16b3b5a462b75b55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
