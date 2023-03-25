import React, {Component} from 'react';
import s from './home.module.css'
import {Grid} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import img_1 from './../IMG/img_1.png'
import img_2 from './../IMG/img_2.png'
import styled from "styled-components";
import Servies from "./Servies";
import Footer, {Warpper} from "./Footer";
import Section1 from "../Sections/section_1";
import Section2 from "../Sections/section_2";
import Section3 from "../Sections/section_3";
import Section4 from "../Sections/Section_4";
import {AiOutlineCloudDownload} from "react-icons/ai";
import Request from "../Request/Request";
export default function Home (){
const Sections =[<Section1 /> , <Section2 /> ,<Section3 /> ]
    const [index, setIndex] = React.useState(0);
    const delay = 10000;
    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === Sections.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {};
    }, [index]);
    return (
            <>
                <Warrper className="slideshow">
                    <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                        {Sections.map((item, index) => (
                            <div className="slide " key={index}  >{item}</div>
                        ))}
                    </div>
                    <div className="slideshowDots">
                        {Sections.map((_, idx) => (
                            <div key={idx}  onClick={() => {
                                setIndex(idx);
                            }} className={`slideshowDot${index === idx ? " active" : ""}`} className="slideshowDot"></div>
                        ))}
                    </div>

                </Warrper>

                <Servies />
                <Request />
                <section>
                    <div className={'row p-5'} style={{backgroundColor:'#18276C'}}>
                       <div className={'col-md-4  m-auto justify-content-center align-items-center'}>
                           <h2 className={'ms-5 mb-5'} style={{fontFamily:'fantasy',color:'white'}}> Find Your Match Faster</h2>
                           <div className={'w-100 ms-5 justify-content-center align-items-center d-flex'}>

                              <p style={{color:'white',fontFamily:'revert'}}>
                                  Download Our App, into a better Cars shopping Experience and Save feature and more !</p>

                          </div>
                           <div className={'justify-content-center align-items-center d-flex'}>
                               <Buttoon  >
                                   <AiOutlineCloudDownload style={{color:'#18276c'}}
                                                           className={'me-2 m-auto'} />
                                   <Link style={{textDecoration:'none',color:'#18276c'}}
                                         className="text-decoration-none" to="./../../Mobile">  Download Our App</Link>
                               </Buttoon>
                           </div>
                       </div>
                        <div className={'col-md-8 d-flex align-items-center justify-content-center'}>
                            <img src={img_2}/>
                        </div>
                    </div>
                </section>
                <section >

                </section>
                <Footer />
            </>
        );



}
const Warrper =styled.div`
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 1000px;
    height: auto;
  }
  .slideshowSlider {
    white-space: nowrap;
    transition: ease 800ms;
    //width: max-content;
    //display: inline-flex;
  }

  .slide {
    display: inline-block;
    //margin-top: -100px;
    //height: 220px;
    width: 100%;
    height: auto;
    border-radius: 40px;
  }
  /* Buttons */
  .slideshowDots {
    text-align: center;
  }
  .slideshowDot {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
  }
  .slideshowDot.active {
    background-color: #6a0dad;
  }
`

const Buttoon =styled.button`

  height: 50px;
  line-height: 46px;
  min-width: 300px;
  margin-top: 2rem;
  border: 2px solid #ffe900;
  background-color: #ffe900;
  text-decoration: none;

  //background-color: inherit;
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

    background-color: #f8faff;
    font-weight: bolder;

    transform: scale(1.0);
    border: 10px;
    border: #18276c;

  }
`