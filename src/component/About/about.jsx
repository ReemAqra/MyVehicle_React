import React, {Component,useRef} from 'react';
import styled from "styled-components";
import img from "../PartCar/1.jpg";
import img1 from "./../IMG/img1.jpg";
import img3 from "./../IMG/img3.jpg";
import img2 from "./../IMG/img2.png";
import {Link} from "react-router-dom";
import logo from './../IMG/logo2.png'
import { Parallax, ParallaxLayer ,IParallax} from '@react-spring/parallax'
import {Grid} from "@mui/material";
import Footer from "../Home/Footer";

export default function About(){
    const IMAGES =[img,img1,img2,img3]
    const delay = 10000;
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {};
    }, [index]);

    return (
            <>
                <Warrper className="slideshow">
                    <div className="background-image-holder slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                        {IMAGES.map((item, index) => (
                            <div className="slide " key={index}  >
                                <img alt="Used auto engine parts" style={{overflow:"hidden"}} width={'100%'}   className="background-image"
                                                                       src={item}/></div>
                        ))}
                    </div>
                    <div className="m-auto  p-5">
                        <div className="mt-5">
                            <div className="col-sm-12 text-center ">
                                {/*<h1 className="opacity-100 text-black uppercase" style={{fontSize:'70px'}}>MYVEHICLE<br/> </h1>*/}
                                <div>
                                    <img src={logo} width={'40%'}/>
                                </div>
                               </div>
                        </div>

                    </div>
                </Warrper>
                <div className={'w-100 align-items-center justify-content-center d-flex'}>
                    <div className={'p-3 w-75    text-end'} style={{fontFamily:'fantasy'}}>
                        <h1 className={'h-auto'}> عن الموقع</h1>
                        <h2>مركبتي</h2>
                        <p className={'p-3'} style={{fontSize:'20px'}}>
                             م"مركبتي" هي منصة اعلانات تقدم خدماتها الإعلانيه والتسويقية لجميع المستخدمين في كافة المدن الفلسطينية
                            مع أكثر من مليار  مشاهدة شهرياً للإعلانات الموجودة عليها، تقوم بدورها بربط البائعين والمشترين بشكل فعلي؛ لتمكينهم
                            من تجارة السيارات وقطع الغيار المستعملة</p>

                        <h4>كيف نعمل؟</h4>
                        <p>
                            .يمكن للمستخدمين تحميل تطبيقنا على الـ ايفون والآندرويد للحصول على أفضل تجربة،
                            أو استخدام موقعنا الإلكتروني للبيع والشراء والتقديم للحصول على وظيفة ما أو تقديم خدمة

                        </p>

                    </div>
                </div>
                <section style={{height:'80px'}}></section>
                <Footer />
{/*                <section >*/}
{/*/!*                  <Grid width={'90%'} bgcolor={"red"} display={"flex"} margin={"auto"} >*!/*/}
{/*/!*dcdcd*!/*/}

{/*/!*                  </Grid>*!/*/}
{/*                </section>*/}
            </>
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
    opacity: 0.3;

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
    top: -40px;

  }

  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 1000px;
    height: auto;
  }

  .slide {
    display: inline-block;
    //margin-top: -100px;
    //height: 220px;
    width: 100%;
    height: auto;
    border-radius: 40px;
  }

  .background-image-holder {
    white-space: nowrap;
    transition: ease 800ms;
    vertical-align: middle;
    width: 100%;
    transform: translate3d(0px, 0px, 0px);
    // background: url(./../IMG/img.png);
    top: -55px;
    position: absolute;
    z-index: -100;
    background: #b1b1b2;
    background-size: cover;
    background-position: 50% 50%;
    //transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    opacity: 0.2;
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

const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


