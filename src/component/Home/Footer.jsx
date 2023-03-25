import React, {Component} from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {blue} from "@mui/material/colors";
import logo from './../AdsImg/img_5.png'
import AppStore from "../IMG/appStore.png";
import googlePlay from "../IMG/googlePlay.png";
export default function  Footer(){
        return (
            <>
                <Warpper>
                    <Grid className={'contant-short'}>
                        <Grid display={"flex"} className={'grid'}>
                            <div className={'d-flex text-start align-items-start justify-content-start'}>
                                <p  style={{fontFamily:"fantasy",color:'#18276c'}} className={'mt-3 ms-0 me-4 fs-5  text-start'} color={blue} > Ready to get started ?</p>
                            </div>
                            <div>
                                <button>
                                    <NavLink style={{fontFamily:"fantasy"}} className={'text-white fs-6  text-decoration-none'} to={"/contact"}> Get Started</NavLink>
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={"center"} alignItems={"center"} display={"flex"} width={'100%'}>
                        <Grid  item xs={4} sm={3}>
                            {/*<img width={'15%'} src={logo}/>*/}
                            <Grid marginLeft={5} padding={3} mt={1}>

                                <p className={'text-white fw-bold'}>Buying & Selling</p>
                                <p className={'text-white '}> Sell Your Car</p>
                                <p className={'text-white '}> Sell Parts Cars</p>
                                <p className={'text-white '}> Find a Car</p>
                                <p className={'text-white '}> Find a Part Car</p>

                            </Grid>
                        </Grid>
                        <Grid  item xs={4} sm={3}>
                            <Grid padding={3} style={{alignItems: "center",
                               // textAlign:'center',
                                justifyContent: "space-evenly"}} >
                                <h4 className={'ms-4 text-white'}>Our Mobile App</h4>
                                <p className={'ms-4 text-white'}>Download the App Today</p>
                                <div className={'col-md-4 pt-2 mt-3 d-flex  align-items-center'}>
                                    <Buttoon><img className={'rounded-2'} src={AppStore}/></Buttoon>
                                    <Buttoon><img   className={'rounded-2'} src={googlePlay}/></Buttoon>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid  item xs={4} sm={4} style={{alignItems: "center",
                            display: "flex",
                            justifyContent: "space-evenly"}}>
                            <img className={'d-flex text-center'} width={'50%'} src={logo}/>
                        </Grid>
                        <Grid item xs={12} height={"3%"} >
                            <p className={'text-white ms-3 opacity-75'}>Copyright © 2022-2023 MyVehicle.com By Reem Aqraa, Diana Allan and Baraa Fatony.</p>
                        </Grid>

                    </Grid>

                </Warpper>
            </>
        );

}

export const  Warpper =styled.section`
  background-color: #18276c;

  .iSIFGq {
    margin: 0;

  }

  .contant-short {
    min-width: 70%;

    max-width: 70%;
    margin: auto;
    margin-top: -6rem;
    padding: 1.3rem 1rem;
    background-color: #d7d7ef;
    border-radius: 1rem;
    box-shadow: #18276c;
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }

    button {

      margin-left: 40rem;
      right: 0;
      //margin-top: 2rem;
      border: 0;
      text-decoration: none;
      //max-width: 50px;
      border-radius: 0.6rem;
      background-color: #18276c;
      color: rgb(24, 39, 108);
      padding: 0.5rem 1.3rem;
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
        //padding: 0.7rem 1.7rem;
        background-color: #ffcc00;
        color: #18276c;

        //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
        //transform: scale(0.7);
      }
    }

    footer {
      padding: 14rem 0 9rem 0;

      h3 {
        color: #0f1d5b;
        margin-bottom: 2.4rem;
      }

      p {
        color: aliceblue;
      }

    }
`

const Buttoon =styled.button`
  
    margin-top: 1rem;
    border: 0;
  margin-left: 1rem;
    text-decoration: none;
    //max-width: 50px;
  //  background-color: #18276c;
   // color: rgb(255 255 255);
    //padding: 0.5rem 1rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    width: auto;
    justify-content: center;
    cursor: pointer;
  background-color: inherit;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
      //padding: 0.5rem 1rem;
    //  background-color: #ffcc00;
     // color: #18276c;
      font-weight: bolder;
      //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
      transform: scale(1);
      //border-radius: 20px;
    


  }
`