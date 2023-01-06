import React, {Component} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
export default function  PageNavigation ({title}){

        return (
            <Warrper>
                <NavLink className={'fs-5 '}style={{color:'#2f3f86'}} to=".././Product">Products</NavLink>/{title}
            </Warrper>
        );
    }

 const Warrper =styled.section`
   height: 4rem;
   background-color: #eff3f3;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-size: 1.2rem;
   padding-left: 2rem;
   //
   //a {
   //  font-size: 2rem;
   //}

 `