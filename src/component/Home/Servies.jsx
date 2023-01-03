import React, {Component} from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import {IoCarSportSharp} from 'react-icons/io5';
import {GiSteeringWheel} from 'react-icons/gi';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineSell, MdSell} from 'react-icons/md';
import { motion } from "framer-motion";

export default function  Servies (){
        return (
            <Warpper>
               <Grid maxWidth spacing={1} margin={2} container justifyContent={"center"} alignItems={"center"} className={'container'}>
                   <Grid border={0} borderRadius={5}  bgcolor={"white"}
                                margin={2} item xs={3}
                                className={'grid'}
                                >
                       <Grid  className={'services'}>
                           <IoCarSportSharp className={' icon'} />
                           {/*<i className={'icon'}><FaCarSide  /></i>*/}
                           <h3>Sell your car</h3>
                           <p className={'opacity-75 d-flex justify-content-center align-items-center p-3 text-center '}>
                               Check out our free, secure methods for selling your car.</p>
                       </Grid>
                   </Grid>
                   <Grid    margin={2} item xs={3} className={'grid'}>
                       <Grid padding={2} border={0} borderRadius={5}  display={"flex"} justifyContent={"center"} alignItems={"center"} height={'8rem'} marginBottom={2} bgcolor={"white"}>
                           <GiSteeringWheel  className={'p-1 icon'} />
                           <p className={'opacity-75 ms-3 d-flex justify-content-center align-items-center mb-0 text-center mb-auto mt-auto'}>
                               provides you with a lot of options  related to your car spare parts, new parts</p>
                       </Grid>
                       <Grid  padding={3}   border={0} borderRadius={5}  display={"flex"}  justifyContent={"center"} alignItems={"center"} height={'8rem'} bgcolor={"white"}>
                          <AiOutlineShoppingCart className={' icon'} />
                           <p  className={'opacity-75 ms-3 d-flex justify-content-center align-items-center mb-0 text-center mb-auto mt-auto'} >
                                   provides many products that you      may need for your car</p>
                       </Grid>
                   </Grid>
                   <Grid border={0} borderRadius={5}  bgcolor={"white"} margin={2} item xs={3} className={'grid'}>
                       <Grid  className={'services'}>
                           <MdOutlineSell className={' icon'} />
                           {/*<i className={'icon'}><FaCarSide  /></i>*/}
                           <h3>Find your car</h3>
                           <p className={'opacity-75 d-flex justify-content-center align-items-center p-3 text-center '}
                           >cars for sale, local dealers, and reviews. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                       </Grid>
                   </Grid>
               </Grid>
            </Warpper>
        );

}

const Warpper =styled.section`
  padding: 2rem 0;
  background-color: #f3f4f6;
  //background-color: #0f1d5b;

  .grid {
    gap: 2rem;
  }

  .services {
    width: auto;
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;

    Grid {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }


  }
  p{
    font-size: 13px;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: -1rem;
    font-size: 1rem;
    color: #0f1d5b;
  }

  .icon {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.4rem;
    border-radius: 50%;
    background-color: #18276c;
    color: #ffcc00;
  }

`