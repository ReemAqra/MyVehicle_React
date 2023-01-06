import React, {Component} from 'react';
import s from './home.module.css'
import {Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
// import {Button} from "./Button";
import Logo from './MM_Logo.jpeg'
import styled from "styled-components";
import Servies from "./Servies";
import Footer from "./Footer";
export default function Home (){

        return (
            <>
                <Warpper   className={s.section}>
                        <Grid marginTop={'0px'} container spacing={2} alignItems={"center"} justifyContent={"center"}  maxWidth={'100%'}  className={s.div}>

                                <Grid item xs={4}  className={"hero-section-data"}>
                                    <p className={'intro-data opacity-50'}>
                                        welcome To
                                    </p>
                                    <h1>MyVehicle</h1>
                                    <p>Buy fast,sell Fast.</p>
                                    <p> And we have great tools for that.</p>
                                    <NavLink>
                                        <button className={"bu-tton"}> show now</button>

                                    </NavLink>
                                </Grid>
                                <Grid item xs={4} className={"hero-section-image"}>
                                    <figure>
                                        <img className={'image-styled'}  src={Logo}/>

                                    </figure>
                                </Grid>
                        </Grid>
                </Warpper>
                <Servies />
                <section>  </section>
                <Footer />
            </>
        );



}

const Warpper =styled.section`
      padding: 1rem 0;
      //align-items: center;
      img {
        min-width: 10rem;
        height: 10rem;
      }

      .hero-section-data {
        p {
          margin: 0rem 0;
        }

        h1 {
          text-transform: capitalize;
          font-weight: bold;
          color: #18276c;
        }

        intro-data {
          margin-bottom: 0;
          opacity: 40%;
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
      }

      .hero-section-image {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      figure {
        position: relative;

        &::after {
          content: "";
          width: 90%;
          height: 80%;
          position: absolute;
          left: 30%;
          z-index: -1;
          //background-color: rgb(158, 187, 203);
          background-image: linear-gradient(90deg, #18276c 5%, #18276c 90%);
          top: -2rem;
        }

      }
    `
