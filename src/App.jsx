import React, {Component} from 'react';
import Home from "./component/Home/Home";
import {Route, Routes} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Product from "./component/Product/Product";
import Error from "./component/error/error";
import Login from "./component/registration/login";
import Signin from "./component/registration/Signin";

class App extends Component{
  render(){
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="Home" element={<Home />}></Route>
                <Route path="Product" element={<Product />}></Route>
                <Route path="registration" element={<login />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='Signin' element={<Signin />}></Route>
                <Route path="*" element={<Error />}></Route>

            </Routes>
        </>
    );
  }
}


export default App;
