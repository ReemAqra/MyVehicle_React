import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import acc from './acc.jpg'
import {Grid} from "@mui/material";
import acc2 from './acc2.jpg'
import acc3 from './acc3.jpg'
import AddAccessories from "../Account/addAccessories";
import {UseAuth} from "../../context/AuthContext";
export default function SellAccessoriess () {
    const {user,logout}=UseAuth();
    return (
            <>
                <NavLink className={'fs-6 me-2  ms-3'}style={{color:'#2f3f86'}} to="./../../sellNow">sell Now</NavLink>/Accessories
                <Warrper  className={'w-100'}>
                    <Grid marginTop={'0px'} container  maxWidth={'100%'}  >

                    <Grid item xs={5} left={0} marginLeft={0} justifyContent={'start'}  padding={0} className={"hero--image"}>
                        <figure>
                            <img className={'mt-5'}    src={acc}/>

                        </figure>
                    </Grid>
                    <Grid justifyContent={"end"} margin={"auto"} alignItems={"auto"} left={0} item xs={3}  className={"he-data"}>
                        <h1 className={'fa-fantasy'} style={{fontFamily:'fantasy'}}>MORE SALES.</h1>
                        <h1 className={'fa-fantasy'} style={{fontFamily:'fantasy'}}>LESS HASSLE.</h1>

                        {!user ? <>
                                <p className={'intro-data opacity-50'}>Start Selling in Minutes.</p>
                                <NavLink >
                                    <button  className={"bu-tton"}>
                                        <Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">SIGN UP FOR FREE</Link>
                                    </button>
                                </NavLink>
                            </>
                            : <>
                                <p className={'intro-data opacity-50'}>Start Selling in Minutes.</p>
                            </>
                        }
                    </Grid>
                        <Grid item xs={4} left={0} mt={3} marginLeft={0} height={'100%'} justifyContent={'start'}  padding={0} className={"hero--image"}>
                            <figure>
                                <img className={''}  height={'100%'}   src={acc3}/>
                            </figure>
                        </Grid>
                    </Grid>
                </Warrper>

                {/*<section className={'bg-warning'}></section>*/}
                {!user ? <>
                        <div>u have to sign in</div>
                        </>
                    : <>
                        <Grid padding={5} bgcolor={'#dbdee9'}>
                            <Grid width={'70%'} justifyContent={"center"} alignItems={"center"}  margin={"auto"}>
                                <AddAccessories email={user.email} uid={user.uid} />

                            </Grid>
                        </Grid>
                        </>
                    }
                    <section className={'w-100 h-75'} style={{backgroundColor:'#18276c'}}>

                        <p className={'text-white'}>Copyright © 2022-2023 by  Reem aqraa</p>
                    </section>
            </>

        );

}

const Warrper=styled.section`
  background-image: url('acc.jpg');
  background-size: cover;
  z-index: 1;
  padding: 0;
  height: 400px;
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