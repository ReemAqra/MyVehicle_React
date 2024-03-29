 const productReducer =(state , action)=>{

     switch (action.type) {
         case "SET_LOADING":
             return {
                 ...state, isLoading: true,
             };
             case "SET_LOADING_ACC":
             return {
                 ...state, isLoading: true,
             };
             case "SET_API_DATA_ACC":
                 // const featureData =action.payload.filter((currunt)=>{
                 // })
                 return {
                 ...state ,
                 isLoading:false,
                 acss: action.payload,
                 // featureProducts: featureData,
             }
         case "API_ERROR":
             return {
                 ...state,
                 isLoading:false,
                 isError: true,
             };
         case "SET_SINGLE_LOADING":
             return {
                 isSingleLoading:true,
             }
         case "SET_SINGEL_ERROR":
             return {
                 ...state,
                 isSingleLoading: false,
                 isError:true

             }
         case "SET_SINGLE_PRODUCT":
             return {
                 ...state,
                 isSingleLoading: false,
                 singleProduct:action.payload
             }
         case "SET_VEHICLE_API_DATA":
             return{
                 ...state,
                 isLoading:false,
                 vehicles:action.payload
             }
     }

    return state;
}
 export default productReducer;