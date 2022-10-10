import React, {createContext,
    useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth} from "../FireDB";
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState({})

    const signup = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })
    return (
        <AuthContext.Provider value={{signup,user,logout,login}}>
            {children}
        </AuthContext.Provider>
    )};

export const UseAuth = () =>{
    return  useContext(AuthContext)
}


