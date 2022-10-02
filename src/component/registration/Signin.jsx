import React, {Component} from 'react';
import style_sign from './Signin.module.css'
class Signin extends Component {

    render() {


        return (
            <div className={style_sign.container_form}>
                <div className={style_sign.container}>
                    <div className={style_sign.signin_signup}>

                        <form className={style_sign.sign_up_form}>
                            <h2 className={style_sign.title}>Personal Account</h2>

                            <div className={style_sign.input_field}>
                                <i className="fas fa-user"></i>
                                <input type="text" id="Nameid" placeholder="Name" name="Name"/>
                            </div>
                            <div className={style_sign.input_field}>
                                <i className="fas fa-envelope"></i>
                                <input type="email" id="emailid" placeholder="email" name="email"/>
                            </div>
                            <div className={style_sign.input_field}>
                                <i className="fas  fa-phone"></i>
                                <input type="phone" id="phoneid" placeholder="phone" name="phone"/>
                            </div>
                            <div className={style_sign.input_field}>
                                <i className="fa-solid fa-location-dot"></i>
                                <input type="city" id="cityid" placeholder="city" name="city"/>
                            </div>
                            <div className={style_sign.input_field}>
                                <i className="fas fa-lock"></i>
                                <input type="password" id="passwordid" placeholder="password" name="password"/>
                            </div>
                            <div className={style_sign.input_field}>
                                <i className="fas fa-lock"></i>
                                <input type="password" id="conformPasswordid" placeholder="confirm password"
                                       name="conformPassword"/>
                            </div>


                        </form>
                        <form className={style_sign.sign_in_form}>
                            <h1 className={style_sign.title}>Merchantِ Account</h1>

                            <div className={style_sign.input_field_b} >
                                <label htmlFor="ExhibitionName" >Exhibition Name</label>
                                <input type="text"  id="ExhibitionName"
                                       required/>

                            </div>
                            <div className={style_sign.input_field_b} >
                                <label htmlFor="ExhibitionNoid" >Exhibition No</label>
                                <input type="text"  id="ExhibitionNoid"
                                       required/>
                            </div>
                            <div className={style_sign.input_field_b} >
                                <label htmlFor="ExhibitionNoid" >Sales Manager </label>
                                <input type="text"  id="SalesManagerNameid"
                                       placeholder="Sales Manager Name"   required/>
                            </div>
                            <div className={style_sign.input_field_b} >
                                <label htmlFor="emailid" >Email </label>
                                <input type="email"  id="emailid"
                                       placeholder="name@example.com"   required/>
                            </div>
                            <div className={style_sign.input_field_b} >
                                <label htmlFor="locationid" >location </label>
                                <input type="email"  id="locationid"
                                          required/>
                            </div>
                            <div className={style_sign.input_field_b} >
                                <label htmlFor="passwordid" >password </label>
                                <input type="password"  id="passwordid"
                                       placeholder="password"    required/>
                            </div>
                            <div className={style_sign.input_field_b} >
                                <label htmlFor="conformPasswordid" >confirm password </label>
                                <input type="password"  id="conformPasswordid"
                                       placeholder="confirm password"    required/>
                            </div>




                        </form>

                    </div>
                    <div className={style_sign.panels_container}>
                        <div className={style_sign.right_panel}>
                            <div className={style_sign.content}>
                                <h3>New Here?</h3>
                                <p>
                                    Buy fast, sell fast.
                                    And we have great tools for that.
                                </p>
                                <button className="btn transparent" id="sign_up_button">Sign up</button>
                            </div>
                        </div>
                        <div className="panel  left_panel">
                            <div className={style_sign.content}>
                                <h3>One of us!</h3>
                                <p>
                                    Buy fast, sell fast.
                                    And we have great tools for that.
                                </p>
                                <button className="btn transparent" id="sign_in_button">Sign in</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Signin;