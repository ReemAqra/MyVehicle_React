import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {query,getDoc,where,collection ,getDocs,setDoc,doc} from 'firebase/firestore'
import {auth,storage ,db} from "../FireDB";
import reducer from "../reducer/productReducer"
 const AppContext =createContext();

const initialState = {
    isLoading:false,
    isError: false,
    acss:[],
    acc:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct: {},

};
 const AppProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const [acc,setacc]=useState([]);

    const getProducts =async ()=>{

    dispatch({ type: "SET_LOADING"});
    try {

        const querySnapshot = await getDocs(collection(db, "accessories"));

        console.log("querySnapshot:",querySnapshot.docs)
        const acss = await  querySnapshot.docs;
        console.log("acss:",acss)
        querySnapshot.docs.forEach((doc) => {
            setacc(acc =>[...acc,doc.id])
            console.log("accessories = ",acc)
        })
        dispatch({type: "SET_API_DATA", payload: acss})

    }
    catch (error) {
        dispatch({type: "API_ERROR"})
    }}
    const getSingleProduct_acc=async (id)=>{
        dispatch({ type: "SET_SINGLE_LOADING"});
        try {
            const querySnapshot = await getDoc(doc(db, "accessories",id));

            console.log("querySingleacss:",querySnapshot.data())
            const singuleAcc = await  querySnapshot.data();
            console.log("eeeeee:",singuleAcc)
            console.log("Part:",singuleAcc.PartName)
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singuleAcc})

        }catch (error){
            dispatch({ type: "SET_SINGEL_ERROR"})


        }

    }
    useEffect(()=>{
        getProducts();
    },[])
    return(
        <AppContext.Provider value={{ ... state ,getSingleProduct_acc}} >{children}</AppContext.Provider>
    );

};
  const useProductContext =()=>{
    return useContext(AppContext)
}
export {AppProvider ,AppContext ,useProductContext} ;