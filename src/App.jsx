import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Product from "./component/Product/Product";
import Error from "./component/error/error";
import Login from "./component/registration/login";
import SignUp from "./component/registration/SignUp";
import Account from "./component/Account/Account";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Footer from "./component/Home/Footer";
import {AppProvider} from "./context/ProductContext";
import SinglePageAcc from "./component/SinglePages/SinglePage_acc";
class App extends Component{
  render(){
    return (
        <><AppProvider>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Home" element={<Home />}></Route>
                    <Route path="Product" element={<Product />}></Route>
                    <Route path="registration" element={<login />}></Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path="SinglePageAcc/:id" element={<SinglePageAcc />}/>
                    <Route path='Account' element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>}>
                    </Route>
                    <Route path='SignUp' element={<SignUp />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <section></section>

            </AuthContextProvider>
        </AppProvider>
        </>
    );
  }
}
export default App;
