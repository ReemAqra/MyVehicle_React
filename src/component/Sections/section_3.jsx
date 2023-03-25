import React, {Component} from 'react';
import s from "../Home/home.module.css";
import {Grid} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import Logo from "../Home/MM_Logo.jpeg";
import styled from "styled-components";
import car1 from "../sellNow/car1.png";

export default function Section3() {

    return (
        <>
            <Warrper className={''}>
                <Grid className={'text'}>
                    <Grid >
                        <h1 className={'mt-5'} style={{fontFamily:'fantasy'}}>SELL YOUR NEW & USED CARS</h1>
                        <hr/>
                        <p className={'position-absolute   opacity-50'}>Sell Everywhere From One Control Panel</p>

                        <>
                                {/*<p className={'intro-data opacity-50'}>Start Selling in Minutes.</p>*/}

                                <NavLink >
                                    <button  className={"bu-tton mt-5 "}>
                                        <Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">SIGN UP FOR FREE</Link>
                                    </button>
                                </NavLink>
                            </>


                    </Grid>

                    {/*<p>Find new & used cars for sale</p>*/}
                    <img className={'mt-auto  bottom-0'} style={{marginRight:'30px'}} width={'50%'} src={car1}/>
                </Grid>

            </Warrper>
        </>
    );

}

const Warrper = styled.section`
  .text {
    width: 100%;

    justify-content: center;
    display: inline-flex;
    position: relative;
    bottom: 0;

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
      width: 70%;
      height: 100%;
      left: 50%;
      z-index: -1;
      position: absolute;
      background-image: linear-gradient(90deg, #ffcc00 5%, #ffcc00 90%);

    }

  }
  

`

