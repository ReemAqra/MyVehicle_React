import React, {Component} from 'react';
import SellNavbar from "./sell_navbar";
import {Route, Routes} from "react-router-dom";
import Sellcars from "./sellcars";
import SellAccessoriess from "./sellAccessoriess";

export default function SellNow () {

        return (
      <><SellNavbar />
         <Routes>
             <Route path="" element={<Sellcars />}></Route>
             <Route path="Sellcars" element={<Sellcars />}></Route>
             <Route path="SellAccessoriess" element={<SellAccessoriess />}></Route>
         </Routes>
      </>
        );

}

