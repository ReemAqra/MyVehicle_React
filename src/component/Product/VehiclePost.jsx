import React, {Component} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export default  function VehiclePost({vehicles}){
    console.log("=========>",vehicles.length)

    // if(vehicles.length === '0'){return (<> nooooooo </>)}
        return (<>
            {1 > 0 ? <div> nooooooo </div> :
            <Warrper>
               <div className={"container"}>
                   <div className={'w-100 row'}>
                       {vehicles.map((current,index)=>{
                           // console.log(current.data())
                           // console.log("=========>",vehicles.length)

                           return(
                               <div className={'col-sm-12 col-md-6 col-lg-3 mb-4'}>
                                   <NavLink className={'text-decoration-none'}  to={`./../SinglePage_Vehicles/${current.id}`}>
                                       <div className={'card'}>
                                           <figure>
                                               <img width={100} src={current.data().images[0]}/>
                                               <figcaption className={'caprion'}>{current.data().companyMake}</figcaption>
                                           </figure>
                                           <div className={"card-data"}>
                                               <div className={"card-data-flex"}>
                                                   <h3 className={'text-decoration-none'}>{current.data().Made}</h3>
                                                   <p className={"card-data--price"}>{current.data().price} ₪</p>
                                               </div>
                                           </div>
                                       </div>
                                   </NavLink>
                               </div>
                           )

                       })}
                   </div>
               </div>
            </Warrper>
            }
            </>
        );

}
const Warrper =styled.section`

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
      font-size: 1.1rem;
      margin: auto;
      //color: #dcd214;
    }

    .card-data--price {
     
      text-underline-color: #eaedf8;
      color: #1c2531;
      opacity: 50%;
      font-size: 0.9rem;
      margin: auto;
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