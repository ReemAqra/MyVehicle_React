import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {query,getDoc,where,collection ,getDocs,setDoc,doc} from 'firebase/firestore'
import {auth,storage ,db} from "../FireDB";
import reducer from "../reducer/productReducer"
import {Firedb} from "../FirebaseDB";
 const AppContext =createContext();

const initialState = {
    isLoading:false,
    isError: false,
    acss:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct: {},
    vehicles:[],

};
 const AppProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const [acc,setacc]=useState([]);

    const getProducts =async ()=>{

    dispatch({ type: "SET_LOADING_ACC"});
    try {

        const querySnapshot = await getDocs(collection(db, "Accessories"));
        console.log("querySnapshot:",querySnapshot)
        const acss = await  querySnapshot.docs;
        console.log("acss:",acss)
        // querySnapshot.docs.forEach((doc) => {
        //     setacc(acc =>[...acc,doc.id])
        //     console.log("accessories = ",acc)
        // })
        dispatch({type: "SET_API_DATA_ACC", payload: acss})
    }
    catch (error) {
        dispatch({type: "API_ERROR"})
    }}

     const getVehicles =async ()=>{
         dispatch({ type: "SET_LOADING"});
         try {
             const veh =await  getDocs(collection(db,"Vehicle"));
             console.log("veh:",veh);
            const vehicles =await veh.docs;
            console.log("vehicles => ",vehicles)
            dispatch({type: "SET_VEHICLE_API_DATA", payload: vehicles})
         } catch (error) {
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
        getVehicles();
    },[])
    return(
        <AppContext.Provider value={{ ... state ,getSingleProduct_acc}} >{children}</AppContext.Provider>
    );
};
  const useProductContext =()=>{
    return useContext(AppContext)
}
export {AppProvider ,AppContext ,useProductContext} ;