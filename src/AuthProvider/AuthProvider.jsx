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
      .finally(() => setLoader(false))
   }

   const loginUser = (email,password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoader(false) )
   }

   const signUpWithGoogle = (provider) => {
   setLoader(true)
    return signInWithPopup(auth,provider)
    .finally(() => setLoader(false))
   }

   const updateUserProfile = (profileinfo) => {
      setLoader(true)
    return updateProfile(auth.currentUser,profileinfo)
    .finally(() => setLoader(false))

   }

   useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
      setUser(currentuser || null)
      setLoader(false);
    })
    return () =>  unsubscribe();

   },[])

   const resetPassword = (email) => {
      setLoader(true)
      return sendPasswordResetEmail(auth,email)
      .finally(() => setLoader(false))
   }

   const LogOut = () => {
      return signOut(auth)
   }

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