import React, {Component} from 'react';
import {UseAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Account (){
 const {user,logout}=UseAuth();
  const Navigate =useNavigate();

 const handleLogout =async ()=>{
     try {
         await logout()
         Navigate('./../login')
         console.log('You are logged out')

     }catch (e){
         console.log(e.message)
     }
 }
 return (
            <>
                <div className='text-center  p-3 text-white fs-2 w-100 vh-100 bg-warning'>Prooooooooooofile
                    <p>{user && user.email}</p>

                    <button onClick={handleLogout} >Log out</button>

                </div>
            </>
        );

}

