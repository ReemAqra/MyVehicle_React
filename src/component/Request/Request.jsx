import React, {Component, useEffect,useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../FireDB";
import {RiChargingPileFill} from "react-icons/ri";
import styled from "styled-components";


export default  function  Request() {
    const [Req,SetRequest]=useState([]);;
    const [index, setIndex] = React.useState(0);
    const delay = 9000;
    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === Req.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {};
    }, [index]);
    const getRequests= async (e)=>{

        const querySnapshot =await  getDocs(collection(db, "Request"));
        console.log("querySnapshot:",querySnapshot)
        SetRequest(querySnapshot.docs)
        console.log("hiiiiiiiii:",Req)
    }
    useEffect(async ()=>{
        getRequests()
        },[])
    return (
        <div>

            <p style={{fontFamily:"fantasy" ,fontSize:'25px', color:'red', padding:'5px', marginLeft:'676px'}} >
                Requests</p>

            <Warrper className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                    {Req.map((item, idx) => (
                        <div className="slide " style={{textAlign:"center"}} key={idx}  >
                            <p style={{fontFamily:"fantasy"}} className={'p-3'}>
                                Someone is looking for a car here company is  {item.data().company} , Fuel {item.data().fuel} in {item.data().locations}
                            </p>
                        </div>
                    ))}
                </div>
            </Warrper>
        </div>
    )}



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