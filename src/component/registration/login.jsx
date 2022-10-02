import React, {Component} from 'react';
import style from './login.module.css'
import {Link, Outlet} from "react-router-dom";
class Login extends Component {
    render() {
        return (
            <>
                <div className={style.container_form }>
                   <div className={style.container}>
                       <div className={style.signin_signup}>
                           <form  className={style.sign_in_form}>

                               <h2 className={style.title}>sign in</h2>
                               <div className={style.input_field}>
                                   <i className="fas fa-user"></i>
                                   <input type="text" placeholder="email"/>
                               </div>
                               <div className={style.input_field}>
                                   <i className="fas fa-lock"></i>
                                   <input type="password" placeholder="password"/>
                               </div>
                               <button type='submit' className={style.btn} >Login</button>
                               <p className="account_text">Don't have an account? <Link to='./Signin' id="sign_up_button2">Sign
                                   up</Link></p>
                               <Outlet />

                           </form>
                       </div>

                   </div>
                </div>
            </>

        );
    }
}

export default Login;