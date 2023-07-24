import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);


const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, serLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
  };
  const logOut = () => {
    return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
 // TODO HERE
            if(currentUser){}
        })
        return () => {
            unsubscribe()
        }
     },[])
    const userInfo = {
      user,
    createUser,
    signIn,
    logOut,
  };

  return (
      <AuthContext.Provider value={userInfo}>
          {children}
      </AuthContext.Provider>
  );
};

export { ContextProvider, AuthContext };
