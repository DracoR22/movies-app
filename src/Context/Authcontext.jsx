import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState({})

    const createUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
      savedShows: []
      })
    };

    const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)                //Log In
    }

    const logout = () => {
        return signOut(auth)                   //log out button
    }
    
   useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)  
    setUser(currentUser)                                                       //See user email in profile
   })
   return () =>{
    unsubscribe()
   }
   },[])

return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
        {children}
    </UserContext.Provider>
)
}

export const UserAuth = () => {
    return useContext(UserContext)
}

