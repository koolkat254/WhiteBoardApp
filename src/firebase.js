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
  apiKey: "AIzaSyCPzzqbBza15KSEm2sEFKWSJkN6aNpxGlQ",
  authDomain: "react-getting-started-6e00e.firebaseapp.com",
  databaseURL: "https://react-getting-started-6e00e-default-rtdb.firebaseio.com",
  projectId: "react-getting-started-6e00e",
  storageBucket: "react-getting-started-6e00e.appspot.com",
  messagingSenderId: "947090430691",
  appId: "1:947090430691:web:b634a062ea7be816f343d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

