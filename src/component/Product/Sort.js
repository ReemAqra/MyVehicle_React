import React, {Component} from 'react';
import styled from "styled-components";
import {BsFillGridFill,BsList} from "react-icons/bs";
import {AiOutlineUnorderedList} from "react-icons/ai"
import {useFilterContext} from "../../context/FilterContext";
export default function Sort () {
    const {grid_view ,filter_vehicle,setGridView,setListView} =useFilterContext()
        return (
          <Wrapper className={"sort-section"}>
              <div className={"sorting-list--grid"}>
                  <button onClick={setGridView} className={ grid_view ? 'active sort-btn':'sort-btn'}>
                      <BsFillGridFill  className={'icon'}/>

                  </button>
                  <button onClick={setListView} className={grid_view ? 'sort-btn' :'active sort-btn'}>
                      <AiOutlineUnorderedList className={'icon'} />
                  </button>
              </div>
              <div className={'product-data'}>
                  {/*<p style={{fontFamily:'fantasy',fontSize:'15px'}} className={'opacity-50'}>{filter_vehicle.length} Product Available</p>*/}
              </div>

              <div className={"sort-selection"}>
                  <form action={'#'}>
                      <label htmlFor={"sort"}></label>
                      <select name={"sort"} id={'sort'}
                      className={"sort-selection--style"}>
                          <option value={"#"}>select</option>
                          <option value={"lowest"}>Price(lowest)</option>
                          <option value={"highest"}>Price(highest)</option>
                          <option value={"a-z"}>Price(a-z)</option>
                          <option value={"z-a"}>Price(z-a)</option>
                      </select>
                  </form>
              </div>
          </Wrapper>
        );

}
const Wrapper =styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: auto;

  .sorting-list--grid {
    display: flex;
    gap: 1rem;

    .sort-btn {
      padding: 0.2rem 0.7rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #0f1d5b;
      background-color: #ffcc00;
      opacity: 50%;


    }

    .icon {
      font-size: 1rem;
    }

    .active {
      background-color: #091549;
      color: #ffcc00;
      border-radius: 0px;
      opacity: 100%;

    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.2rem 0.2rem;
    background-color: #f2f4fa;
    cursor: pointer;
    border-color: #c0c5de;
    border-radius: 5px;
    font-family: "Koulen", cursive;
    color: #091549;

    .sort-select--option {
      padding: 0.4rem 0;
      cursor: pointer;
      height: 0.5rem;
      padding: 10px;
    }
  }
`

