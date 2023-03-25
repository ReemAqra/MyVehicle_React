import React, {Component} from 'react';
import s from "../Home/home.module.css";
import {Grid} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import Logo from "../Home/MM_Logo.jpeg";
import styled from "styled-components";
import car1 from "../sellNow/car1.png";
import img2 from "../Request/img6.png";
import img1 from "../Request/img5.jpg";

export default function Section4() {

    return (
        <>
            <Warrper className={'w-100'}>
                <Grid className={'text'}>
                    <img className={' p-3 mt-5 img-1-request bottom-0'}
                         style={{right:'15%'}} width={'40%'} height={'auto'} src={img2}/>
                    <Grid position={'absolute mt-3'} style={{width:'30%',backgroundColor:'white'}} >
                        <h1 className={'mt-5 position-relative'} style={{fontFamily:'fantasy'}}>Part Request</h1>
                        <hr/>
                        <p className={'position-absolute opacity-50'}>THE RIGHT PART MAKES ALL THE DIFFERENCE </p>
                        <NavLink >
                            <button  className={"bu-tton mt-5 "}>
                                <Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">SIGN UP FOR FREE</Link>
                            </button>
                        </NavLink>
                    </Grid>
                    <img className={'justify-content-end img-request  bottom-0'}
                         style={{marginRight:'0px'}}
                         width={'50%'} src={img1}/>
                </Grid>
            </Warrper>
        </>
    );

}


const Warrper = styled.section`
  //justify-content: space-between;
  background-color: white;
  width: max-content;
  justify-content: flex-end; 
  .text {
    width: 100%;
    justify-content: center;
    display: inline-flex;
    position: relative;
    bottom: 0;

    .img-request{
      overflow: hidden;
      width: auto;
      height: 100%;
      
    }

    .img-1-request{
      position: relative;
      display: flex;
      background-color: white;
      &::after {
        content: "";
        width: 90%;
        height: 80%;
        position: absolute;
        //left: 30%;
        z-index: -1;
        //background-color: rgb(158, 187, 203);
        background-image: linear-gradient(90deg, #18276c 5%, #18276c 90%);
        top: -2rem;
      }
    }
    button {
      margin-top: 2rem;
      border: 0;
      text-decoration: none;
      //max-width: 50px;
      background-color: #18276c;
      color: rgb(255 255 255);
      padding: 0.7rem 1.7rem;
      border: none;
      text-transform: uppercase;
      text-align: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;

      &:hover,
      &:active {
        padding: 0.8rem 1.8rem;
        background-color: #ffcc00;
        color: #18276c;
        font-weight: bolder;
        //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
        transform: scale(0.96);
      }


    }

    &::after {
      content: "";
      width: 90%;
      height: 100%;
      left: 50%;
      z-index: -1;

      position: absolute;
      background-image: linear-gradient(90deg, #ffcc00 5%, #ffcc00 90%);

    }

  }
  

`
