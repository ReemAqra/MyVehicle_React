import React, {Component, useState} from 'react';
import Alert from "bootstrap/js/src/alert";
import {motion} from "framer-motion";
import {Link ,useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css'
import {UseAuth} from "../../context/AuthContext";


export default function  SignUp () {
    const [clicked_M,setclicked_M]=useState(false)
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [location,setlocation]=useState('Ramallah')
    const [password,setpassword]=useState('')
    const [conformPassword,setconformPassword]=useState('')
    const [error,seterror]=useState('')
    const [Loading,setLoading]=useState(false)
    const { signup }=UseAuth();
    const navigate =useNavigate();


    function handleClick_M(){
        setclicked_M(true)
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
            await signup(email,password)
            navigate('./../account')

        }catch (e){
            seterror(e.message)
            console.log(e.message)
        }
        setLoading( false)
}

    return (
            <div>
                <div className={`_containerForm`} >
                    <div className={clicked_M ? `_container active ` :`_container`}>
                        <div className={ clicked_M ? `_Signup`:`_Signup`}>
                            <form
                                onSubmit={handleSubmit}
                                className="_PersonalsignUpForm">
                                <h2 className={`title`}>PersonalAccount</h2>
                                {error && <p variant="danger">{error}</p>}

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
                                        <option value='Jerusalem'>Jerusalem</option>
                                        <option value='Jericho'>Jericho</option>
                                        <option value='Al_Birah'>Al_Birah</option>
                                        <option value='Ramallah'>Ramallah</option>
                                        <option value='Hebron'>Hebron</option>
                                        <option value='Nablus'>Nablus</option>
                                        <option value='Tulkarm'>Tulkarm</option>
                                        <option value='Qalqilya'>Qalqilya</option>
                                        <option value='Bethlehem'>Bethlehem</option>
                                        <option value='Jenin'>Jenin</option>
                                        <option value='Tubas'>Tubas</option>
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
                                    className={`_btn`} >Sign in</motion.button>
                                <p className="account_text">Already have an account?<Link to='./../login' id="sign_up_button2">Sign in</Link></p>
                            </form>

                            <form className="_signInForm ">
                                <h1 className={`title `}>Merchant Account</h1>
                                <div className={"p-2 d-flex float-start "} >
                                    <label className={"me-2"} htmlFor="ExhibitionName" >Exhibition Name</label>
                                    <input type="text"  id="ExhibitionName" required/>
                                </div>
                                <div className={"p-2 d-flex float-start  "} >
                                    <label className={"me-2"} htmlFor="ExhibitionNoid" >Exhibition No</label>
                                    <input type="text"  id="ExhibitionNoid" required/>
                                </div>
                                <div className={"p-2"} >
                                    <label className={"me-2"} htmlFor="ExhibitionNoid" >Sales Manager </label>
                                    <input type="text"  id="SalesManagerNameid"
                                           placeholder="Sales Manager Name" required/>
                                </div>
                                <div className={"p-2"} >
                                    <label className={"me-2"} htmlFor="emailid" >Email </label>
                                    <input type="email" id="emailid" placeholder="name@example.com" required/>
                                </div>
                                <div className={"p-2"} >
                                    <label className={"me-2"} htmlFor="locationid" >location </label>
                                    <input type="email"  id="locationid"
                                           required/>
                                </div>
                                <div className={"p-2"} >
                                    <label className={"me-2"} htmlFor="passwordid" >password</label>
                                    <input type="password" id="passwordid" placeholder="password" required/>
                                </div>
                                <div className={"p-2"} >
                                    <label htmlFor="conformPasswordid" >confirm password </label>
                                    <input type="password"  id="conformPasswordid"
                                           placeholder="confirm password"    required/>
                                </div>
                                <motion.button
                                    whileHover ={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    className={`_btn`} >Sign in
                                </motion.button>
                                <p className="account_text ">Already have an account?
                                    <Link className="p-2" to='./../login' id="sign_up_button2">Sign
                                        in</Link>
                                </p>

                            </form>
                        </div>
                        <div className="_panelsContainer">
                            <div className={`_panel right_panel`}>
                                <div className={`_content`}>
                                    <p className='fs-3' style={{fontFamily: 'fantasy'}}>New Here?</p>
                                    <p>
                                        Buy fast, sell fast.
                                        And we have great tools for that.
                                    </p>
                                    <motion.button
                                        whileHover ={{scale:1.1}}
                                        whileTap={{scale:0.9}}
                                        onClick={handleClick_M}
                                        className={`_btN`} >Personal Account

                                    </motion.button>
                                </div>
                            </div>
                            <div className={`_panel left_panel`}>
                                <div className={`_content`}>
                                    <p className='fs-3' style={{fontFamily: 'fantasy'}}>One of us!</p>
                                    <p>
                                        Buy fast, sell fast.
                                        And we have great tools for that.
                                    </p>
                                    <motion.button
                                        whileHover ={{scale:1.1}}
                                        whileTap={{scale:0.9}}
                                        onClick={handleClick_M}
                                        className={`_btN`} >Merchant Account</motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );

}



