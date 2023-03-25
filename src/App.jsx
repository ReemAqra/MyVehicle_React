import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Product from "./component/Product/Product";
import Error from "./component/error/error";
import Login from "./component/registration/login";
import SignUp from "./component/registration/SignUp";
import Account from "./component/Account/Account";
import SellNow from "./component/sellNow/sellNow"
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import PartCars from './component/PartCar/PartCars'
import {FilterContextProvider} from './context/FilterContext'
import {AppProvider} from "./context/ProductContext";
import SinglePageAcc from "./component/SinglePages/SinglePage_acc";
import SinglePage_Vehicles from "./component/SinglePages/SinglePage_Vehicles";
import Sellcars from "./component/sellNow/sellcars";
import SellAccessoriess from "./component/sellNow/sellAccessoriess";
import Request from "./component/Request/Request";
import About from "./component/About/about";
import Mobile from "./component/Mobile/Mobile";
class App extends Component{
  render(){
    return (
        <>
            <AppProvider>
                <FilterContextProvider>
                <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Home" element={<Home />}></Route>
                    <Route path="About-Us" element={<About />}></Route>
                    <Route path="Request" element={<Request />}></Route>
                    <Route path="Mobile" element={<Mobile />}></Route>
                    <Route path="Product" element={<Product />}></Route>
                    <Route path="Part-Cars" element={<PartCars />}></Route>
                    <Route path="sellNow" element={<SellNow />}>
                        <Route path="Sellcars" element={<Sellcars />}></Route>
                        <Route path="" element={<Sellcars />}></Route>
                        <Route path="SellAccessoriess" element={<SellAccessoriess />}></Route>
                    </Route>
                    <Route path="registration" element={<login />}></Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path="SinglePageAcc/:id" element={<SinglePageAcc />}/>
                    <Route path="SinglePage_Vehicles/:id" element={<SinglePage_Vehicles />}/>
                    <Route path='Account' element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>}>
                    </Route>
                    <Route path='SignUp' element={<SignUp />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>

            </AuthContextProvider>
                </FilterContextProvider>
        </AppProvider>
        </>
    );
  }
}
export default App;
