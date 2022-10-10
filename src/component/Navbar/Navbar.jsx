import React, { useEffect,Component, useState } from "react";
import {Link  , Outlet} from "react-router-dom";
import { AiOutlineClose , AiOutlineUnorderedList}  from "react-icons/ai";
import {ImMenu}  from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import style_Navbar from "./navbar.css"
import {motion } from 'framer-motion'
import {UseAuth} from "../../context/AuthContext";

export default function Navbar() {
const [clicked,setclicked]=useState(false)
    const { user } =UseAuth();

    function handleClick (){
        setclicked(!clicked)
    }

    return (
        <>
            <header className=" w-100   _header ">
                <div className="navbar navbar-expand-md ">
                    <Link className="navbar-brand text-white ms-3 p-2 _header_logo" to="/">MyVehicle</Link>
                    <nav  className="container-fluid  navbar-expand-md _header_content">
                        <div className="_header_contant_item container-fluid   justify-content-center m-0">
                            {/* Menu */}
                            <motion.ul className={clicked ? "nav justify-content-centers active" : "nav justify-content-center"}>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase  m-1 fs-5 ">
                                    <Link className="nav-link text-white" to="Home">HOME</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1 fs-5 ">
                                    <Link className="nav-link text-white" to="Product">Product</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1  fs-5">
                                    <Link className="nav-link text-white" to='about'>about</Link>
                                </motion.li>
                            </motion.ul>
                        </div>
                        {!user ?
                        <div className={clicked ? "_header_contant_btndiv active" : "_header_contant_btndiv"}>
                            <Link
                                className="_header_content_btn  border border-1  ps-2 pe-2 p-1  me-3" to='Login'>LOGIN
                            </Link>
                            <Link
                                className="_header_content_btn  border border-1 ps-2 pe-2 p-1  me-3" to="Signup">SIGNUP
                            </Link>
                        </div>
                            :
                        <div className={clicked ? "_header_contant_btndiv active" : "_header_contant_btndiv"}>
                            <Link
                                className="_header_content_btn  border border-1 ps-2 pe-2 p-1  me-3" to="Account">Account
                            </Link>
                        </div>}
                    </nav>
                    {/* SMALL SCREEN */}
                    <motion.button
                        whileHover ={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        onClick={handleClick}
                        className="_header_toggle end-0 text-white  text-black  me-2  p-2 border-0 "
                        style={{background:"inherit" }} type="button" >
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </motion.button>
                </div>
            </header>
        </>

    );


}

