import React, {useEffect, useState} from 'react';
import Alert from "bootstrap/js/src/alert";
import {motion} from "framer-motion";
import {Link, Outlet, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css'
import {UseAuth} from "../../context/AuthContext";
import style from "./login.module.css";
import car_logo from './../error/MM_Logo.jpeg'

import Axios from 'axios'
import {collection,setDoc, doc} from "firebase/firestore";
import {db} from "../../FireDB";

export default function  SignUp () {
    const [clicked_M,setclicked_M]=useState(false)
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [location,setlocation]=useState('')
    const [userName,setuserName]=useState()
    const [password,setpassword]=useState('')
    const [conformPassword,setconformPassword]=useState('')
    const [error,seterror]=useState('')
    const [Loading,setLoading]=useState(false)
    const { signup }=UseAuth();
    const navigate =useNavigate();
  
    function handleClick_M(){
        setclicked_M(!clicked_M)
    }
    async function handleSubmit(e){
        //alert(`${username} ${email} ${phone} ${location} ${password} ${conformPassword}`)
         e.preventDefault()
          if(password !== conformPassword){
              return seterror("Password don't match")
          }
        try {
            seterror('')
            setLoading(true)
            await signup(email,phone,password)
            await setDoc(doc(collection(db, "Users",)), {
                email: email,
                phone: phone,
                location:location,
                username: userName,
            });
            navigate('./../account')

        }catch (e){
            seterror(e.message)
            console.log(e.message)
        }
        setLoading( false)
}

useEffect(()=>{
const SaveUserinfo=async(email,phone,location)=>{

}
},[])

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
            <div>
                <div className={`_containerForm`} >
                    <div className={clicked_M ? `_container active ` :`_container`}>
                        <div className={ clicked_M ? `_Signup`:`_Signup`}>
                            <form
                                onSubmit={handleSubmit}
                                className="_PersonalsignUpForm">
                                <h2 className={`title`}>Sign up</h2>

                                {error && <p variant="danger">{error}</p>}
                                <div className={`border border-1 input_field`}>
                                    <i className="fas fa-envelope"></i>
                                    <input value={userName}
                                           onChange={(e)=>setuserName(e.target.value)}
                                           type="text" placeholder="User Name" required/>
                                </div>
                                <div className={`border border-1 input_field`}>
                                    <i className="fas fa-envelope"></i>
                                    <input value={email}
                                           onChange={(e)=>setemail(e.target.value)}
                                           type="email" placeholder="name@example.com" required/>
                                </div>
                                <div className={`border border-1 input_field`}>
                                    <i className="fas fa-phone"></i>
                                    <input value={phone}
                                           onChange={(e)=>setphone(e.target.value)}
                                           type="phone" placeholder="phone" name="phone"/>
                                </div>
                                <div className={`border border-1 input_field`}>
                                    <i style={{lineHeight:'25px', width:'15%', color: '#353860', height:'30px'}}
                                       className="fs-5 text-center fa-solid fa-location-dot"></i>
                                    <select  value={location}
                                             onChange={(e)=>setlocation(e.target.value)}
                                             className={'border border-0 w-100'}>
                                        <option value='Al_Birah'>Al_Birah</option>
                                        <option value='Jerusalem'>Jerusalem</option>
                                        <option value='Jericho'>Jericho</option>
                                        <option value='Ramallah'>Ramallah</option>
                                        <option value='Hebron'>Hebron</option>
                                        <option value='Nablus'>Nablus</option>
                                        <option value='Tulkarm'>Tulkarm</option>
                                        <option value='Qalqilya'>Qalqilya</option>
                                        <option value='Bethlehem'>Bethlehem</option>
                                        <option value='Jenin'>Jenin</option>
                                        <option value='Tubas'>Tubas</option>
                                        <option value='AL-lyd'>AL-lyd</option>
                                        <option value='AL-majdal'>AL-majdal</option>
                                        <option value='AL-Nasra'>AL-Nasra</option>
                                        <option value='Besan'>Besan</option>
                                        <option value='Bir Al-Sabe`'>Bir Al-Sabe`</option>
                                        <option value='Gaza'>Gaza</option>
                                        <option value='Haifa'>Haifa</option>
                                        <option value='Jaffa'>Jaffa</option>
                                        <option value='khan Younis'>khan Younis</option>
                                        <option value='Ramla'>Ramla</option>
                                        <option value='Safad'>Safad</option>
                                        <option value='Rafah'>Rafah</option>
                                        <option value='Tabria'>Tabria</option>
                                        <option value='Tobas'>Tobas</option>
                                    </select>
                                </div>
                                <div className={`border border-1 input_field`}>
                                    <i className="fas fa-lock"></i>
                                    <input value={password}
                                           onChange={(e)=>setpassword(e.target.value)}
                                           type="password" placeholder="password" name="password"/>
                                </div>
                                <div className={`border border-1 input_field`}>
                                    <i className="fas fa-lock"></i>
                                    <input value={conformPassword}
                                           onChange={(e)=>setconformPassword(e.target.value)}
                                           type="password"  placeholder="confirm password"
                                           name="conformPassword"/>
                                </div>
                                <motion.button
                                    disabled={Loading}
                                    whileHover ={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    className={`_btn`} >Sign up</motion.button>
                                {/*<p className="account_text">Already have an account?<Link to='./../login' id="sign_up_button2">Sign in</Link></p>*/}
                            </form>

                            <form
                                onSubmit={handleSubmitLogin}
                                  className={style.sign_in_form}>
                                <h2 className={'title'}>Sign in</h2>
                                {error && <Alert severity="error">{error}!</Alert>}
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
                                    <Link to='./../Signin' id="sign_up_button2">Sign in</Link>
                                </p>
                                <Outlet />
                            </form>
                        </div>
                        <div className="_panelsContainer">
                            <div className={`_panel right_panel`}>
                                <div className={`_content`}>
                                    <img src={car_logo} width='100%' height='100%' className={'justify-content-center mb-2'} alt={'img'}/>

                                    <p className='fs-3' style={{fontFamily: 'fantasy'}}>New Here?</p>
                                    <p>
                                        Buy fast, sell fast.
                                        And we have great tools for that.
                                    </p>
                                    <motion.button
                                        whileHover ={{scale:1.1}}
                                        whileTap={{scale:0.9}}
                                        onClick={handleClick_M}
                                        className={`_btN`} >Sign up

                                    </motion.button>
                                </div>
                            </div>
                            <div className={`_panel left_panel`}>
                                <div className={`_content`}>
                                    <img src={car_logo} width='100%' height='100%' className={'justify-content-center mb-2' } alt={'img'}/>

                                    <p className='fs-3' style={{fontFamily: 'fantasy'}}>One of us!</p>
                                    <p>
                                        Buy fast, sell fast.
                                        And we have great tools for that.
                                    </p>
                                    <motion.button
                                        whileHover ={{scale:1.1}}
                                        whileTap={{scale:0.9}}
                                        onClick={handleClick_M}
                                        className={`_btN`} >sigm in</motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}

 

