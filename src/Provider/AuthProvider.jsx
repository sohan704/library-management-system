import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState('');


  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const observe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };


      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
          .then(res => {
            console.log('token response', res);
          })
      } else {
        axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
          .then(res => console.log(res));
      }
    })
    return () => {
      observe();
    }
  }, [])


  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    loading,
    googleLogin
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;