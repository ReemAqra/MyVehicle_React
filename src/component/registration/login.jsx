import React, {Component, useState} from 'react';
import style from './login.module.css'
import {motion} from "framer-motion";
import {UseAuth} from "../../context/AuthContext";
import {Link, Outlet, useNavigate} from "react-router-dom";

export default function Login(){
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,seterror]=useState('')
    const navigate =useNavigate();
    const { login }=UseAuth();

    const handleSubmitLogin=async (e)=>{
        e.preventDefault()
        seterror('')
        try{
            await login(email,password)
            navigate('./../account')
        }catch (e){
            seterror(e.message)
            console.log(e.message)
        }
    }
        return (
            <>
                <div className={style.container_form }>
                   <div className={style.container}>
                       <div className={style.signin_signup}>
                           <form onSubmit={handleSubmitLogin}
                               className={style.sign_in_form}>
                               {error && <p variant="danger">{error}</p>}
                               <h2 className={style.title}>sign in</h2>
                               <div className={style.input_field}>
                                   <i className="fas fa-user"></i>
                                   <input value={email}
                                          onChange={(e)=>setemail(e.target.value)}
                                          type="text" placeholder="email"/>
                               </div>
                               <div className={style.input_field}>
                                   <i className="fas fa-lock"></i>
                                   <input value={password}
                                          onChange={(e)=>setpassword(e.target.value)}
                                          type="password" placeholder="password"/>
                               </div>
                               <motion.button
                                   whileHover ={{scale:1.1}}
                                   whileTap={{scale:0.9}}
                                   type='submit'
                                   className={style.btn} >Login
                               </motion.button>
                               <p className="account_text">Don't have an account?
                                   <Link to='./../Signin' id="sign_up_button2">Sign up</Link>
                               </p>
                               <Outlet />
                           </form>
                       </div>
                   </div>
                </div>
            </>
        );
}

