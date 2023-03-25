import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import img_3 from './../IMG/img_4.png'
import logo10 from './../IMG/img_6.png'
import AppStore from './../IMG/appStore.png'
import googlePlay from './../IMG/googlePlay.png'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './../IMG/img_8.png'
import Search1 from './../IMG/img_10.png'
import Search2 from './../IMG/img_11.png'
import Footer from "../Home/Footer";
export default function Mobile() {

        return (
            <>

                <div className={'mt-3'}>
                    <NavLink className={' container mt-2 fs-6  p-3  ms-3'}style={{color:'#18276c'}} to="./../../">Home</NavLink>/  Mobile
                    <hr/>
                    <div className={'p-1 d-flex justify-content-center text-center align-items-center'}>
                        <h1 style={{color:'#111c4f',fontFamily:'fantasy'}}>Our Vehicle App is Available on iOS and Android</h1>
                    </div>
                    <div>
                        <img width={'100%'} src={img_3}/>
                    </div>
                </div>

                <section className={'row bg-secondary h-auto bg-opacity-10'}>
                    <div className={'col-md-2 d-flex p-3  justify-content-end'}>
                        <img src={logo10} width={'150'} className={'border-0 rounded-1 mt-2'}/>
                        {/*<img className={'border-0 rounded-1 mt-2'}style={{left: '75px',*/}
                        {/*    position: 'relative'}} height={'auto'} width={'150'} src={logo}/>*/}
                    </div>
                    <div className={'col-md-6 p-3  mt-3 mb-3'}>
                        <h2 style={{fontFamily:'fantasy'}}>Download the app today</h2>
                        <hr />
                        <p>
                            Shopping for a New or Used car or Parts?
                            Download the free MyVehicle app to find the perfect car for you. Shop the best deals with immediate access to  millions listings,
                            , and more.
                        </p>
                    </div>
                    <div className={'col-md-4 p-2 mt-3'}>
                        <Buttoon><img className={'rounded-2'} src={AppStore}/></Buttoon>
                        <Buttoon><img   className={'rounded-2'} src={googlePlay}/></Buttoon>
                    </div>
                </section>
                <div className={'p-3 '}>
                    <h1 style={{fontFamily:'fantasy' ,color:"revert"}} >Designed to help you meet your match</h1>
                    <p className={'p-3 fs-5 fst-italic opacity-75  w-100'}>Scroll through detailed photos and get to know all the vehicle’s
                        features . See what special offers are available,
                        including cash back and special financing from dealers and manufacturers,
                        to save you money on your new or used car on our car buying app.</p>
                </div>
                <section className={'row  align-item-center d-flex justify-content-center'}>
                    <div className={'col-md-6 text-end '} style={{backgroundColor:'#FFCF00'}}>
                        <img width={'auto'} style={{overflow:'hidden'}} src={Search}/>
                    </div>
                    <div className={'col-md-6  p-5 mt-3'}>
                        <h2 style={{fontFamily:'fantasy',color:'slategrey'}}>Narrow your search with shopping filters</h2>
                        <hr/>
                        <p className={'p-3 fs-5 fst-italic opacity-75 w-100'}>
                            Car shopping is easier than ever with our extensive list of filters.
                            Narrow your search by price, mileage, year, exterior and interior color, fuel type, transmission,
                            body style, and more. Add specific keywords to search for must-have features on our app.
                        </p>
                    </div>
                </section>

                <section className={'row align-item-center d-flex justify-content-center'}>
                    <div  className={'col-md-6 p-5 w-50 mt-3'}>
                        <h2 style={{fontFamily:'fantasy',color:'slategrey'}} >Get notified when prices drop</h2>
                        <hr/>
                        <p className={'p-3 fs-5 fst-italic opacity-75 w-100'}>Set up notifications to be alerted any time to check news</p>
                    </div>
                    <div className={'col-md-6 text-start '} style={{backgroundColor:'#0F227B'}}>
                        <img width={'auto'} src={Search1}/>
                    </div>
                </section>

                <section className={'row align-item-center d-flex justify-content-center'}>
                    <div className={'col-md-6 text-end '} style={{backgroundColor:'#FFCF00'}}>
                        <img width={'auto'} style={{overflow:'hidden'}} src={Search2}/>
                    </div>
                    <div  className={'col-md-6 p-5 mt-3'}>
                        <h2 style={{fontFamily:'fantasy',color:'slategrey'}}>Save and access favorites, all in one place</h2>
                        <hr/>
                        <p className={'p-3 fs-5 fst-italic opacity-75 w-100'}>Save your favorite cars & Parts Cars.</p>
                    </div>
                </section>


                <section style={{height:'50px'}}></section>
                <Footer />

            </>
        );

}

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


