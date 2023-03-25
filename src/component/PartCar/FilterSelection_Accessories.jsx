import React from 'react';
import {IoColorFilterSharp} from "react-icons/io5";
import {useFilterContext} from "../../context/FilterContext";
import img from "./../AdsImg/img_4.png";
import styled from "styled-components";

export default function FilterSelectionAccessories () {
    const { updatefilterValue_a,ClearFilters,
        filters_a:{text_a ,locations_a },all_acc}
        =useFilterContext();

    const getUniqueData =(data,property)=>{
        let newVal =data.map((curElem )=>{
            return curElem.data()[property];
        });
        return (newVal = ["all", ...new Set(newVal)]);
        // console.log("newVal ~~~~",newVal);
    }
    const LocationData = getUniqueData(all_acc,"Location")
        return (
            <Warrper>
                <h5 className={'text-black-50'}><IoColorFilterSharp /> Find Your Match</h5>

                <div className={"filter-company"}>
                    <h6 className={''} style={{fontFamily:'fantasy'}}>Location</h6>
                    <form action={"#"}>
                        <select name={'locations_a'}
                                onClick={updatefilterValue_a}
                                id={'locations_a'}
                                className={'w-100 p-2 border-bottom-warning'}>
                            {LocationData.map((curElem,index)=>{
                                return(
                                    <option key={index} value={curElem} name= {"locations"}>
                                        {curElem}
                                    </option>
                                )
                            })}
                        </select>
                    </form>
                    <div className={"filter-clear"}>
                        <button onClick={ClearFilters}>
                            Clear Filters
                        </button>
                    </div>
                </div>
                <div className={'m-auto'}>
                    <a href="http://join-shortest.com/ref/2397c06d66?user-type=new">
                        <img src={img} title="MyVehicle.com" width="250" height="250" />
                    </a>
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
  }
`

