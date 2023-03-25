import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  FilterSelection  from "./FilterSelection";
import {useProductContext} from "../../context/ProductContext";
import styled from "styled-components";
import { animated } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import {Link, NavLink} from "react-router-dom";
import ReactLoading from "react-loading";
import VehiclePost from "./VehiclePost"
import ProductList from "./ProductList"
import Sort from "./Sort"
import {useFilterContext} from "../../context/FilterContext";
import {IoColorFilterSharp} from "react-icons/io5";
import {Grid} from "@mui/material";
import img2 from "../Request/img6.png";
import img1 from "../Request/img5.jpg";
import video1 from "./makeup.mp4"
import Footer from "../Home/Footer";
import Ads from "../ads/ads";
import Request from "../Request/Request";
export default function Product () {

    const {isLoading , acss ,vehicles } =useProductContext()
    console.log(vehicles,"<<<<<<<<<<<<<<<<<<")
    const {filter_vehicle}=useFilterContext();
    console.log("filter_vehicle=>",filter_vehicle)
    const alignCenter = { display: 'flex', alignItems: 'center' }

    if (isLoading)
        return <ReactLoading
            className="m-auto justify-content-center p-2 mt-5 mb-4"
            type={"bars"}
            color="#b2c1cc"
            height={317}
            width={60}
        />
        return (
            <>
                <Warrper className={'w-100'}>
                    <Grid className={'text'}>
                        <img className={' p-3 mt-5 img-1-request bottom-0'}
                             style={{right:'15%'}} width={'40%'} height={'auto'} src={img2}/>
                        <Grid position={'absolute mt-3'} style={{width:'30%',backgroundColor:'white'}} >
                            <h1 className={'mt-5 position-relative'} style={{fontFamily:'fantasy'}}>Find Your Match</h1>
                            <hr/>
                            <p className={'position-absolute opacity-50'}> list your car ~ free, secure, easy-to-use ways to sell.
                            </p>
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
                {/*<Request />*/}
                <Ads />
                <div className="container grid grid-filter-column ">
                    <div className={'row p-5 justify-content-center'} >
                        <div className={'p-3 bg-light  col-md-2'}>
                            <FilterSelection />
                        </div>
                        <div className="m-2 row  col-md-9 row">
                            <div className={'sort-filter'}>
                                <Sort />
                            </div>
                            <div className={"mainproduct"}>
                                <ProductList />
                            </div>
                        </div>
                        </div>
                    </div>
                <section ></section>
                <Footer />

            </>
        )

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
const Warpper =styled.section`

  padding: 3rem 0;
  height: auto;
  //background-color: #a0cece;

  .container {
    max-width: 200rem;
  }

  figure {
    padding: 0.1rem;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      //background-color: #dcd214;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.1s linear;
      cursor: pointer;
      //z-index: 10;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.1);
    }

    img {
      max-width: 100%;
      width: 95%;
      margin-top: 0.5rem;
      height: 10rem;
      transition: all 0.1s linear;
    }

    .caprion {
      position: absolute;
      top: 10%;
      right: 10%;
      text-transform: uppercase;
      background-color: #fcfcfc;
      padding: 0.6rem 1rem;
      font-size: 0.8rem;
      border-radius: 0.3rem;
    }
  }

  .card {
    background-color: #f5f6fc;
    border-radius: 0.4rem;

    .card-data {
      padding: 0 0.8rem;
      height: 30px;

    }

    .card-data-flex {
      //margin: 0rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //background-color: #18276c;
      margin-right: -4px;
      margin-top: -17px;
    }

    h3 {
      text-decoration: none;
      color: #1c2531;
      text-transform: capitalize;
      font-size: 1.3rem;
      //color: #dcd214;
    }

    .card-data--price {
      text-decoration: none;
    !important;
      text-underline-color: #eaedf8;
      color: #1c2531;
      opacity: 50%
    }

    .btn {
      margin: 1rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background-color: rgb(255, 204, 0);
    }

    &:hover a {
      color: #ffffff;
    }
  }
`