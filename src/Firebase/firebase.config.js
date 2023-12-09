// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyupI4TLaDXAIfYPC0Ddv9TzmeOSv1N1k",
  authDomain: "oglibrary-8c213.firebaseapp.com",
  projectId: "oglibrary-8c213",
  storageBucket: "oglibrary-8c213.appspot.com",
  messagingSenderId: "750768652162",
  appId: "1:750768652162:web:09c4be9863c79b4f9a999b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;