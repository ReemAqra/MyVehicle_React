import React, {Component} from 'react';
import img1 from './1.jpg'
import img2 from './2.jpg'
import styled from "styled-components";
import {Link} from "react-router-dom";
import AccessoriesPost from "./AccessoriesPost";
export default function  PartCars (){
        return (
            <div>
                <Warrper className="image-bg bg-dark parallax overlay pt24 pb24">
                    <div className="background-image-holder">
                        <img alt="Used auto engine parts" style={{overflow:"hidden"}} width={'100%'}   className="background-image"
                             src={img1}/>
                    </div>
                    <div className="m-auto  p-5">
                        <div className="">
                            <div className="col-sm-12 text-center ">
                                <h1 className="opacity-100 text-white uppercase" style={{fontSize:'70px'}}>Used Auto Parts <br/> Direct to you</h1>
                                <button  className={"button border-1 mt-5 "}>
                                    <Link style={{textDecoration:'none'}} className="text-white" to="./../sellNow/sellAccessoriess">Start Selling</Link>
                                </button>
                                <button  className={"button mt-5 ms-5"}>
                                    <Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">Start Shopping</Link>
                                </button>
                                {/*<a className="btn btn-lg btn-filled" href="">Start Shopping</a>*/}
                            </div>
                        </div>

                    </div>

                </Warrper>
                <div>
                    <AccessoriesPost />
                </div>
            </div>
        );
}


const Warrper=styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: block;

  .image-bg {

  }

  .overlay:before {
    background-color: #e8eaef;
    //opacity: .3;
  }

  .background-image-holder, .bg-light.overlay:before, .overlay:before {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  //.container.image-bg .row, .image-bg .container, .image-bg div[class*=col-] {
  //  position: relative;
  //  z-index: 3;
  //}

  //.btn-group-vertical > .btn-group:after, .btn-group-vertical > .btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
  //  display: table;
  //  content: " ";
  //}

  //.container, .relative {
  //  position: relative;
  //}
  //
  //.container {
  //  padding-right: 15px;
  //  padding-left: 15px;
  //  margin-right: auto;
  //  margin-left: auto;
  //}

  .button {
    height: 50px;
    line-height: 46px;
    min-width: 200px;
    margin-top: 2rem;
    border: 2px solid #ffe900;
    text-decoration: none;
    //max-width: 50px;
    //border-color: #eeeeee;
    background-color: inherit;
    color: rgb(26, 26, 159);
    //padding: 0.7rem 1.7rem;
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
      //padding: 0.8rem 1.8rem;
      color: #18276c;

      background-color: #ffe900;
      font-weight: bolder;
      //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
      transform: scale(0.96);
      border: 10px;
      border: #18276c;
    }


  }

  .background-image {
    position: absolute;
    top: -55px;

  }

  .background-image-holder {
    vertical-align: middle;
    width: 100%;
    transform: translate3d(0px, 0px, 0px);
    background: url(1.jpg);
    top: -55px;
    position: absolute;
    z-index: -100;
    background: #e8eaef;
    background-size: cover;
    background-position: 50% 50%;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    opacity: 0.3;
  }

  h1.uppercase {
    letter-spacing: 17px;
    margin-right: -17px;
  }

  .mb8 {
    margin-bottom: 8px;
  }

  .uppercase {
    font-weight: 400;
  }

  .bold-h6, .uppercase {
    text-transform: uppercase;
  }

  .bold-h6, .h1, .h2, .h3, .h4, .h5, .h6, .label, h1, h2, h3, h4, h5, h6 {
    font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .home-page.uppercase {
    letter-spacing: 8px;
    color: #f8faff;
  }

  .image-bg h1, .image-bg h2,
  .image-bg h3, .image-bg h4, .image-bg h5, .image-bg h6, .image-bg li, .image-bg p, .image-bg span {
    color: #fff;
  }

  .row {
    margin-right: -15px;
    margin-left: -15px;
  }


  .bg-light.overlay:before, .overlay:before {
    position: absolute;
    content: '';
    z-index: 2;
  }

  bg-dark, .overlay:before {
    background: #c3c4cc;
  }

  .pb24 {
    padding-bottom: 24px;
  }

  .pt24 {
    padding-top: 24px;
  }
`

