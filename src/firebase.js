// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://react-getting-started-6e00e-default-rtdb.firebaseio.com"
// });
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9ybJAWqHrVvSqObyauGzRkKtizkWXY0",
  authDomain: "react-getting-started-9c89e.firebaseapp.com",
  databaseURL: "https://react-getting-started-9c89e-default-rtdb.firebaseio.com",
  projectId: "react-getting-started-9c89e",
  storageBucket: "react-getting-started-9c89e.appspot.com",
  messagingSenderId: "43284820304",
  appId: "1:43284820304:web:e9c289720d0bba3faafc55",
  measurementId: "G-J40LSYK1RL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

