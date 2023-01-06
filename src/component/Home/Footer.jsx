import React, {Component} from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {blue} from "@mui/material/colors";

export default function  Footer(){
        return (
            <>
                <Warpper>
                    <Grid className={'contant-short'}>
                        <Grid display={"flex"} className={'grid'}>
                            <div className={'d-flex text-start align-items-start justify-content-start'}>
                                <p className={'mt-3 ms-0 me-4 text-start'} color={blue} > Ready to get started ?</p>
                            </div>
                            <div>
                                <button>
                                    <NavLink className={'text-white text-decoration-none'} to={"/contact"}> Get Started</NavLink>
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                    <footer>
                        hikjb
                    </footer>

                </Warpper>
            </>
        );

}

export const  Warpper =styled.section`
  background-color: #18276c;

  .iSIFGq {
    margin: 0;

  }

  .contant-short {
    min-width: 70%;
  
    max-width: 70%;
    margin: auto;
    margin-top: -6rem;
    padding: 1.3rem 1rem;
    background-color: #f6f6f8;
    border-radius: 1rem;
    box-shadow: #18276c;
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }

    button {

      margin-left: 40rem;
      right: 0;
      //margin-top: 2rem;
      border: 0;
      text-decoration: none;
      //max-width: 50px;
      border-radius: 0.6rem;
      background-color: #18276c;
      color: rgb(255 255 255);
      padding: 0.5rem 1.3rem;
      border: none;
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
        //padding: 0.7rem 1.7rem;
        background-color: #ffcc00;
        color: #18276c;

        //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
        //transform: scale(0.7);
      }
    }

    footer {
      padding: 14rem 0 9rem 0;

      h3 {
        color: #0f1d5b;
        margin-bottom: 2.4rem;
      }

      p {
        color: aliceblue;
      }

    }
`