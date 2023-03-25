import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import {Grid} from "@mui/material";
import car1 from './car1.png'
import {UseAuth} from "../../context/AuthContext";
import AddAccessories from "../Account/addAccessories";
import AddVehicles from "../Account/addVehicles";
import Footer from "../Home/Footer";
import Ads from "../ads/ads";
import Request from "../Request/Request";
export default function  Sellcars () {

    const {user,logout}=UseAuth();

    return (
            <div>
                {/*<NavLink className={'fs-6 me-2  ms-3'}style={{color:'#2f3f86'}} to="./../../sellNow">sell Now</NavLink>/cars*/}

                <Warrper className={''}>
                    <Grid className={'text'}>
                        <Grid >
                            <h1 className={'mt-5'} style={{fontFamily:'fantasy'}}>SELL YOUR NEW & USED CARS</h1>
                            <hr/>
                            <p className={'position-absolute   opacity-50'}>Sell Everywhere From One Control Panel</p>

                            {!user ? <>
                                    {/*<p className={'intro-data opacity-50'}>Start Selling in Minutes.</p>*/}

                                    <NavLink >
                                        <button  className={"bu-tton mt-5 "}>
                                            <Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">SIGN UP FOR FREE</Link>
                                        </button>
                                    </NavLink>
                                </>
                                : <>
                                    {/*<p className={'intro-data opacity-50'}>Start Selling in Minutes.</p>*/}
                                </>
                            }
                        </Grid>

                        {/*<p>Find new & used cars for sale</p>*/}
                    <img className={'mt-auto  bottom-0'} style={{marginRight:'30px'}} width={'50%'} src={car1}/>
                    </Grid>

                </Warrper>
                <Request />
                <Ads />
                {!user ? <>
                        <section className={'m-auto'}> Sign Up For Free</section>
                    </>
                    : <>
                        <Grid padding={5} bgcolor={'#dbdee9'}>
                            <Grid width={'70%'} justifyContent={"center"} alignItems={"center"}  margin={"auto"}>
                                <AddVehicles email={user.email} uid={user.uid} />

                            </Grid>
                        </Grid>
                    </>
                }

                <section style={{height:'80px'}}></section>
                <Footer />
            </div>
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
      width: 90%;
      height: 100%;
      left: 50%;
      z-index: -1;

      position: absolute;
      background-image: linear-gradient(90deg, #ffcc00 5%, #ffcc00 90%);

    }

  }
  

`
