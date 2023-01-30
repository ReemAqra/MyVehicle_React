import React, {Component} from 'react';
import styled from "styled-components";
import {useFilterContext} from "../../context/FilterContext";
import Button from "@mui/material/Button";

export default function FilterSelection () {

    const {updatefilterValue,ClearFilters,
        filters:{text ,category,companyMake},all_products} =
        useFilterContext();


    const getUniqueData =(data,property)=>{
        let newVal =data.map((curElem )=>{
            return curElem.data()[property];
        });
        return (newVal = ["all", ...new Set(newVal)]);
        // console.log("newVal ~~~~",newVal);
    }
    const categoryOnlyData = getUniqueData(
        all_products,"category");

    const companyData = getUniqueData(all_products,"companyMake")
    const fuelData = getUniqueData(all_products,"Fuel")
    const LocationData = getUniqueData(all_products,"Location")
    console.log("newVal=> > >",companyData);

    return (
            <Warrper>

                <div className={"filter-search"}>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input type={"text"}
                               name={"text"}
                               value={text}
                               onChange={updatefilterValue}
                               placeholder={'Search'}
                        />
                    </form>

                </div>

                <div className={"filter-category"}>
                    <h4>Category</h4>
                    <button className={'w-auto'}
                                      type="button"
                                      onClick={updatefilterValue}
                                      name="category"
                                      value={category}
                        >all
                        </button>


                </div>
                <div className={"filter-company"}>
                    <h4>company</h4>
                    <form action={"#"}>
                        <select name={'company'}
                                onClick={updatefilterValue}
                                id={'company'}
                        className={'filter-company--select'}>
                            {companyData.map((curElem,index)=>{
                                return(
                                    <option key={index} value={curElem} name= {"company"}>
                                        {curElem}
                                    </option>
                                )
                            })}
                        </select>
                    </form>
                </div>
                <div className={"filter-company"}>
                    <h4>fuel</h4>
                    <form action={"#"}>
                        <select name={'fuel'}
                                onClick={updatefilterValue}
                                id={'fuel'}
                                className={'filter-company--select'}>
                            {fuelData.map((curElem,index)=>{
                                return(
                                    <option key={index} value={curElem} name= {"fuel"}>
                                        {curElem}
                                    </option>
                                )
                            })}
                        </select>
                    </form>
                </div>
                <div className={"filter-company"}>
                    <h4>Location</h4>
                    <form action={"#"}>
                        <select name={'locations'}
                                onClick={updatefilterValue}
                                id={'locations'}
                                className={'filter-company--select'}>
                            {LocationData.map((curElem,index)=>{
                                return(
                                    <option key={index} value={curElem} name= {"locations"}>
                                        {curElem}
                                    </option>
                                )
                            })}
                        </select>
                    </form>
                </div>

                <div className={"filter-clear"}>
                    <button onClick={ClearFilters}>
                        Clear Filters
                    </button>
                </div>
            </Warrper>
        );

}
const Warrper=styled.section`
padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h3{
    padding: 2rem 0;
    
  }
  .filter-search{
    input{
      padding: 0.5rem 1rem;
      width: 95%;
    }
  }
  .filter-category{
    padding: 0.1rem 1rem;
    color: #091549;
    h4{
      font-size: 15px;
      margin-right: 15px;
      font-family: sans-serif;
    }
    button{
      border: none;
      width: auto;
      background-color: initial;
      border-bottom-style: revert;
      &:hover{
        border-bottom-color: #dcd214;
      }
      
    }
    div{
      width: auto;
      border: none;
      font-size: 20px;
      
    }
  }
  .filter-company{
    padding: 0.1rem 1rem;
    color: #091549;
    h4{
      font-size: 15px;
      margin-right: 15px;
      font-family: sans-serif;
    }
    .filter-company--select{
      width: 100%;
    }
    button{
      border: none;
      width: auto;
      background-color: initial;
      border-bottom-style: revert;
      &:hover{
        border-bottom-color: #dcd214;
      }

    }
    
  }

  .filter-clear{
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 1rem;
      border: 0;
      text-decoration: none;
      //max-width: 50px;
      background-color: #18276c;
      color: rgb(255 255 255);
      padding: 0.5rem 1rem;
      border: none;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;

      &:hover,
      &:active {
        padding: 0.5rem 1rem;
        background-color: #ffcc00;
        color: #18276c;
        font-weight: bolder;
        //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
        transform: scale(1);
        border-radius: 20px;
      }


    }
  }/
`

