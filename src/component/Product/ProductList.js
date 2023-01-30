import React, {Component} from 'react';
import {useFilterContext} from "../../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView"
export default function ProductList() {
    const {filter_vehicle,grid_view} =useFilterContext();
    console.log("filter_vehicle",filter_vehicle)

       if (grid_view ===true){
           return <GridView product={filter_vehicle} />
       }
       if (grid_view === false){
           return <GridView product={filter_vehicle} />

           // return <ListView product={filter_vehicle}/>
       }
}

