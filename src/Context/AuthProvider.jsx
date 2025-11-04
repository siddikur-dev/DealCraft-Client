import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase/Firebas.config";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User With MailPass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with mail pass
  const signInWithMailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign In Google
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Password Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Manage User State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const loggedUser = { email: currentUser.email };
        fetch(`http://localhost:3000/jwtToken`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
          });
      }
      else{
        localStorage.removeItem('token')
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //   value User Info
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInWithMailPass,
    resetPassword,
    signOutUser,
    signInGoogle,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
