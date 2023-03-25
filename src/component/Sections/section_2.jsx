import React, {Component} from 'react';
import s from "../Home/home.module.css";
import {Grid} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import Logo from "../Home/MM_Logo.jpeg";
import styled from "styled-components";
import acc from "../sellNow/acc.jpg";
import acc3 from "../sellNow/acc3.jpg";

export default function Section2() {

    return (
        <>
            {/*<section className={'bg-primary'}></section>*/}
            <Warrper  className={'w-100'}>
                <Grid marginTop={'0px'} container  maxWidth={'100%'}  >

                    <Grid item xs={5} left={0} marginLeft={0} justifyContent={'start'}  padding={0} className={"hero--image"}>
                        <figure>
                            <img className={'mt-3'}    src={acc}/>

                        </figure>
                    </Grid>
                    <Grid justifyContent={"end"} margin={"auto"} alignItems={"auto"} left={0} item xs={3}  className={"he-data"}>
                        <h1 className={'fa-fantasy'} style={{fontFamily:'fantasy'}}>MORE SALES.</h1>
                        <h1 className={'fa-fantasy'} style={{fontFamily:'fantasy'}}>LESS HASSLE.</h1>

                        <>
                                <p className={'intro-data opacity-50'}>Start adding in Minutes.</p>
                                <NavLink >
                                    <button  className={"bu-tton"}>
                                        <Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">SIGN UP FOR FREE</Link>
                                    </button>
                                </NavLink>
                            </>

                    </Grid>
                    <Grid item xs={4} left={0} mt={3} marginLeft={0} height={'100%'} justifyContent={'start'}  padding={0} className={"hero--image"}>
                        <figure>
                            <img className={''}  height={'100%'}   src={acc3}/>
                        </figure>
                    </Grid>
                </Grid>
            </Warrper>


        </>
    );

}



const Warrper=styled.section`
  background-image: url('../sellNow/acc.jpg');
  background-size: cover;
  z-index: 1;
  padding: 0;
  height: auto;
  //width: 100%;

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
    font-weight: bolder;

    &:hover,
    &:active {
      //padding: 0.8rem 1.8rem;
      background-color: #ffcc00;
      color: #18276c;
      //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
      //transform: scale(0.96);
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

`