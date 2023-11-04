// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwgyGSVZ9MOW2nAnwL97BmWHXjVrtwOu4",
  authDomain: "library-management-74fff.firebaseapp.com",
  projectId: "library-management-74fff",
  storageBucket: "library-management-74fff.appspot.com",
  messagingSenderId: "848255488458",
  appId: "1:848255488458:web:d67f49b114b175f2f27f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;