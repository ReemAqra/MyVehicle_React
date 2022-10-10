import React from 'react';
import {Navigate} from "react-router-dom";
import {UseAuth} from "../context/AuthContext";

export default function ProtectedRoute({children}){
    const { user } =UseAuth();
    if(!user){
        return(
            <>
                <Navigate to='./../'/>
            </>
        )
    }
    return children;
}