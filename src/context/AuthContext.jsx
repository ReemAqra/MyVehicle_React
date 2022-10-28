import React, {createContext,
    useContext, useEffect, useState} from "react";
    import {set, ref, getDatabase,update} from "firebase/database";
import {collection ,getDocs,setDoc,doc} from 'firebase/firestore'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth, db} from "../FireDB";
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState({})


    const signup =  (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password).then(async(res )=>{
            // await setDoc(doc(db, "cities", "LA"), {
            //     name: "Los Angeles",
            //     state: "CA",
            //     country: "USA"
            // });
        })
                
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


