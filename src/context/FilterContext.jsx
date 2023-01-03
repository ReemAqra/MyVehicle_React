// import {createContext, useContext, useEffect, useReducer} from "react";
//
//
// const FilterContext =createContext();
// const  initialState ={
//     filter_product:[],
//     all_products:[],
//     grid_view: true,
// }
// export const filterContextProvider =({children}) =>{
//     // const [state,dispatch]=useReducer(reducer,initialState)
//     // useEffect(()=>{
//     //     // dispatch({ type :"LOAD_FILTER_PRODUCTS", payload: products});
//     // },[products])
//     return(
//         // value={{... state}}
//         <FilterContext.Provider value={{... state}} >
//             {children}
//         </FilterContext.Provider>
//     )
// };
// export const useFilterContext =()=>{
//     return useContext(FilterContext)
// }