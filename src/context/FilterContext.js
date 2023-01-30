import {useProductContext} from "./ProductContext";
import {createContext, useContext, useEffect, useReducer, useState} from "react";
import reducer from "../reducer/filterReducer";

const FilterContext =createContext();
const  initialState ={
    filter_vehicle:[],
    all_products:[],
    filter_acc:[],
    all_acc:[],
    grid_view: true,
    filters:{
        text:'',
        company:'all',
        category:'all',
        // vehicle:[],
        fuel:'all',
        locations:'all',
    },
    filters_a:{
        text_a:'',
        locations_a: 'all'
    }
}
const FilterContextProvider =({children})=>{

    const {vehicles,acss} =useProductContext();
    console.log("~file: filtrtContext.js ~line 14 ~ FilterContextProvider ~vehicles:",vehicles)
    const [state,dispatch]=useReducer(reducer,initialState);

    //grid view
    const setGridView=()=>{
        return dispatch({type : "SET_GRIDVIEW"})
    }
    const setListView=()=>{
        return dispatch({type : "SET_LISTVIEW"})
    }
    const updatefilterValue=(event)=>{

        let name =event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTER_VALUE" ,payload: {name,value}})
    }
    const updatefilterValue_a=(event)=>{

        let name_a =event.target.name_a;
        let value_a = event.target.value_a;
        return dispatch({type:"UPDATE_FILTER_VALUE_ACCESSORIES" ,payload: {name_a,value_a}})
    }
    const ClearFilters =()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }
    useEffect(()=>{
        dispatch({ type :"LOAD_FILTER_PRODUCTS_ACCESSORIES", payload: acss});
        dispatch({ type :"LOAD_FILTER_PRODUCTS", payload: vehicles});
        dispatch({type:"FILTER_PRODUCT"})
        dispatch({type:"FILTER_PRODUCT_ACCESSORIES"})

    },[vehicles,state.filters])
    return(
        // value={{... state}}
        <FilterContext.Provider value={{... state,
            setGridView,
            setListView,
            updatefilterValue,updatefilterValue_a,
            ClearFilters}}
        >{children}</FilterContext.Provider>
    )
};
 const useFilterContext =()=>{
    return useContext(FilterContext)
}
export {FilterContextProvider ,useFilterContext ,FilterContext}

