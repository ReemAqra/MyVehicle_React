import React, {Component} from 'react';
import Img1 from "./../AdsImg/img.png";
import Img2 from "../AdsImg/img_1.png";
import Img3 from "../AdsImg/img_2.png";
import Img4 from "../AdsImg/img_3.png";
import styled from "styled-components";


export default function Ads() {
    const imgs =[Img1 ,Img2 ,Img3 ]
    const [index, setIndex] = React.useState(0);
    const delay = 9000;
    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {};
    }, [index]);
        return (
            <Warrper className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {imgs.map((item, idx) => (
                    <div className="slide " style={{textAlign:"center"}} key={idx}  >

                        <img   width={'60%'} src= {item} />

                     </div>
                ))}
            </div>
            </Warrper>

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