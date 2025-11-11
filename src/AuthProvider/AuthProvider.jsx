import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext()


const AuthProvider = ({children}) => {

   const [user,setUser] = useState(null);
   const [loader,setLoader] = useState(true);

   const createUser = (email,password) => {
      setLoader(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }

   const loginUser = (email,password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const signUpWithGoogle = (provider) => {
   setLoader(true)
    return signInWithPopup(auth,provider)
  
   }

   const updateUserProfile = (profileinfo) => {
      setLoader(true)
    return updateProfile(auth.currentUser,profileinfo)

   }
    const LogOut = () => {
      setLoader(true)
      return signOut(auth)
   }
    const resetPassword = (email) => {
      setLoader(true)
      return sendPasswordResetEmail(auth,email)
   
   }

   useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
   
      setUser(currentuser || null)
      setLoader(false);
    })
    return () =>  unsubscribe();

   },[])
  
    const authinfo = {
     createUser,loginUser,LogOut,
     user,setUser,
     loader,setLoader,
      signUpWithGoogle,updateUserProfile,
      resetPassword
    }

    return <AuthContext.Provider value={authinfo}>
       {children}
    </AuthContext.Provider>
};

export default AuthProvider;