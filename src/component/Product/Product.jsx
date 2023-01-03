import React, { useState} from 'react';
import {Grid} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import sort from "./sort";
import filterSelection from "./filterSelection";
import ProductList from "./ProductList";
export default function Product () {

    const [products, setProduct] =useState([
           {id:1,Made:'kia',Distance:'180',Price:'200000',NumberOfDors:'4',GearType:'Manual',Model:'2021'},
           {id:2,Made:'BMW',Distance:'60',Price:'250000',NumberOfDors:'4',GearType:'Manual',Model:'2015'},
           {id:3,Made:'mercedes',Distance:'500',Price:'70000',NumberOfDors:'4',GearType:'Automatic',Model:'2019'},
           {id:4,Made:'Audi',Distance:'350',Price:'200000',NumberOfDors:'4',GearType:'Automatic',Model:'2020'},
       ])




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
                            <div className={'row main-product'}>
                                <ProductList />
                            {products.map((product )=>
                                <div className="col-sm-6 col-md-4 col-lg-3  bg-secondary ">
                                    <p>Made: {product.Made}</p>
                                    <p>Price: {product.Price}</p>
                                    <p>Model: {product.Model}</p>
                                </div>
                            )}
                            </div>
                        </div>
                        </div>
                    </div>

            </>
        )

}

