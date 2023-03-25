import React, {Component, useState} from 'react';
import {motion } from 'framer-motion'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {NavItem} from "react-bootstrap";
import {UseAuth} from "../../context/AuthContext";

export default function SellNavbar () {

    const [clicked,setclicked]=useState(false)
    function handleClick (){
        setclicked(!clicked)
    }
    return (
            <Wrapper>
            <nav className={''}>
                <motion.ul className={'p-0 container'}>
                    <motion.li
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }}
                        className=" text-uppercase  mt-2 me-3 fs-6 ">
                        <Link onClick={handleClick} className={clicked ?"link_nav  nav-link  " : "link_nav  nav-link  active"} to="sellcars"> ADD CARS</Link>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }}
                        className=" text-uppercase mt-2 me-3 fs-6  ">
                        <Link onClick={handleClick} className= {clicked ?"link_nav  nav-link active" : "link_nav  nav-link  "} to="./sellAccessoriess">ADD ACCESSORIES</Link>

                        </motion.li>

                </motion.ul>

            </nav>
            </Wrapper>
        );

}

const Wrapper = styled.section`
  border-bottom-color: #091549;
  width: 100%;
  height: auto;
  background-color: #cacfe5;

  nav {

    ul {

      display: flex;
      flex-direction: inherit;
      width: 100%;
      //position: absolute;
      top: 8px;
      left: -100%;
      opacity: 1;
      text-align: start;
      transition: all 0.5s ease;

      li {
        list-style: none;

        .link_nav:hover::after
          //,.active
        {
          //content: "";
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: #0f1d5b;
          top: 0px;
          left: 0;
          border-radius: 4px;
          transition: 0.3s ease all;

        }

      }

      li .active {
        content: "";
        position: relative;
        height: 3px;
        //width: 100%;
        background-color: #0f1d5b;
        bottom: -3px;
        left: 0;
        border-radius: 4px;
        transition: 0.3s ease all;

      }
    }

    ul {
      li {
        &:hover {
          transition: 0.3s ease all;
          //background: #283885;
          //border-top-right-radius: 25px;
          //border-bottom-left-radius: 25px;
        }
      }
    }
  }
`