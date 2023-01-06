import React, { useState} from 'react';
import {Grid} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import sort from "./sort";
import filterSelection from "./filterSelection";
import ProductList from "./ProductList";
import {useProductContext} from "../../context/ProductContext";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import ReactLoading from "react-loading";
export default function Product () {
    // const {hi} =useProductContext()

    const [products, setProduct] =useState([
           {id:1,Made:'kia',Distance:'180',Price:'200000',NumberOfDors:'4',GearType:'Manual',Model:'2021'},
           {id:2,Made:'BMW',Distance:'60',Price:'250000',NumberOfDors:'4',GearType:'Manual',Model:'2015'},
           {id:3,Made:'mercedes',Distance:'500',Price:'70000',NumberOfDors:'4',GearType:'Automatic',Model:'2019'},
           {id:4,Made:'Audi',Distance:'350',Price:'200000',NumberOfDors:'4',GearType:'Automatic',Model:'2020'},
       ])
    const {isLoading , acss } =useProductContext()
    console.log(acss,"<<<<<<<<<<<<<<<<<<<<<<<<<")

    if (isLoading)
        return <ReactLoading
            className="m-auto justify-content-center p-2 mt-5 mb-4"

            // type="spinningBubbles"
            type={"bars"}
            color="#b2c1cc"
            height={317}
            width={60}
        />




        return (
            <>

                    <div className="container grid grid-filter-column ">
                        {/*<h1 className=" bg-info ">Product component</h1>*/}
                        <div className={'row p-5 justify-content-center'} >
                        <div className={'p-3 bg-light  col-md-2'}>


                            <form>

                                <input type={"text"} value={'Search'}/>
                            </form>


                        </div>
                        <div className="m-2 row  col-md-9 row">
                            <div className={'sort-filter'}>
                                <sort />
                                Soooorttt
                            </div>
                            {/*<div className={'row main-product'}>*/}
                            {/*    <ProductList />*/}
                            {/*{products.map((product )=>*/}
                            {/*    <div className="col-sm-6 col-md-4 col-lg-3  bg-secondary ">*/}
                            {/*        <p>Made: {product.Made}</p>*/}
                            {/*        <p>Price: {product.Price}</p>*/}
                            {/*        <p>Model: {product.Model}</p>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            {/*</div>*/}
                            <Warpper>
                                <div className={'container'}>
                                    <div className={'w-100 row'}>
                                        {acss.map((cuurent,index)=>{
                                            // return <Product key={index} { ...cuurent}/>
                                            console.log(cuurent.data())
                                        return(
                                            <div className={'col-sm-12 col-md-6 col-lg-3 mb-4'}>
                                            <NavLink className={'text-decoration-none'}  to={`./../SinglePageAcc/${cuurent.id}`}>
                                                <div className={'card'}>
                                                    <figure>
                                                        <img width={100} src={cuurent.data().images[0]}/>
                                                        <figcaption className={'caprion'}>{cuurent.data().PartName}</figcaption>
                                                    </figure>
                                                    <div className={"card-data"}>
                                                        <div className={"card-data-flex"}>
                                                            <h3 className={'text-decoration-none'}>{cuurent.data().PartName}</h3>
                                                            <p className={"card-data--price"}>{cuurent.data().Price} ₪</p>
                                                        </div>
                                                    </div>
                                                    {/*<h1> hhhi: {cuurent.data().PartName}</h1>*/}
                                                </div>
                                            </NavLink>
                                            </div>
                                                )

                                        })}
                                    </div>
                                </div>

                            </Warpper>
                        </div>
                        </div>
                    </div>

            </>
        )

}

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