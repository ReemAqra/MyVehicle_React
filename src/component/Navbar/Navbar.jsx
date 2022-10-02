import React, { useEffect,Component, useState } from "react";
import style from "./navbar.css"

import bootstrap from'bootstrap/dist/css/bootstrap.min.css'
import {Link  , Outlet} from "react-router-dom";
//import style from "./navbar_css.css"
import { AiOutlineClose , AiOutlineUnorderedList}  from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

import css from "./navbar.css"
class Navbar extends Component {
render() {
    return (
        <>
            <header className=" w-100   _header ">
                <div className="navbar navbar-expand-md ">
                    <Link className="navbar-brand text-white ms-3 p-2 _header_logo" to="/">MyVehicle</Link>
                    <nav  className="container-fluid  navbar-expand-md _header_content">
                        <div className="_header_contant_item container-fluid btn-danger  justify-content-center m-0">
                            <ul className="nav  justify-content-center ">
                                <li className="nav-item   text-uppercase  m-1 fs-5 ">
                                    <Link className="nav-link text-white" to="Home">HOME</Link>
                                </li>
                                <li className="nav-item text-uppercase m-1 fs-5 ">
                                    <Link className="nav-link text-white" to="Product">Product</Link>
                                </li>
                                <li className="nav-item text-uppercase m-1  fs-5">
                                    <Link className="nav-link text-white" to='about'>about</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="_header_content_btn  border border-1  ps-2 pe-2 p-1  me-3" to='Login'>LOGIN</Link>
                        <Link className="_header_content_btn  border border-1 ps-2 pe-2 p-1  me-3" to="Signin">SIGNIN</Link>
                    </nav>
                    {/* SMALL SCREEN */}
                    <button className="_header_toggle navbar-toggler end-0 text-white  text-black fs-1 me-2  p-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbar_Nav">
                        < AiOutlineUnorderedList />
                    </button>
                 <div id="navbar_Nav" className="collapse">
                     <ul className="  ">
                         <li className="   text-uppercase  m-1 fs-5 ">
                             <Link className=" text-white" to="Home">HOME______</Link>
                         </li>
                         <li className=" text-uppercase m-1 fs-5 ">
                             <Link className=" text-white" to="Product">Product</Link>
                         </li>
                         <li className=" text-uppercase m-1  fs-5">
                             <Link className=" text-white" to='about'>about</Link>
                         </li>
                     </ul>
                 </div>
                </div>
            </header>

            <header className=" w-100  _header1">
                <div className=" _header1_contant1 ">
                    <Link className="_header_logo navbar-brand fs-5 ms-4 " to="/">My Vehicle</Link>
                    <nav className="_header_nav">
                        <ul className="">
                            <li className="nav-item text-uppercase fs-6 text-dark">
                                <Link className="nav-link text-dark " to="Home">HOME</Link>
                            </li>
                            <li className="nav-item text-uppercase fs-6 text-dark">
                                <Link className="nav-link text-dark" to="Product">Product</Link>
                            </li>
                            <li className="nav-item text-uppercase fs-6 text-dark">
                                <Link className="nav-link text-dark" to='about'>about</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="_header_toggle">

                    </div>
                    <button className="_header_btn  float-end p-2 h1  border-0 rounded-2 bg-transparent" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar_Nav">
                        < AiOutlineUnorderedList />
                    </button>


                </div>
            </header>

            <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

        </>

    );
}

}

export default Navbar;