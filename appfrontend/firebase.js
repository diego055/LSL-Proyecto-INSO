import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIX8y-y06aCO3h2N1u4HIHsF7IUtBLVIE",
  authDomain: "proyecto-diego-390eb.firebaseapp.com",
  projectId: "proyecto-diego-390eb",
  storageBucket: "proyecto-diego-390eb.appspot.com",
  messagingSenderId: "761946309562",
  appId: "1:761946309562:web:fb21c65ded689272f81383",
  databaseURL: "https://proyecto-diego-390eb-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
