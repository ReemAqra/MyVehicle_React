const filterReducer =(state,action)=>{
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem,key)=> parseInt(curElem.data().price) )
         //   console.log("🚀 ~ file : filterReducer.js ~ line 5 ~ priceArr",priceArr)
           // console.log(Math.max.apply(null,priceArr))
            // let MaxPrice =priceArr.reduce(
            //     (initialVal,CurElem)=>
            //     Math.max(initialVal,CurElem),0
            // )
            let MaxPrice =Math.max(...priceArr)
          //  let MinPrice =Math.min(...priceArr)
           // console.log("🚀 ~ file : filterReducer.js ~ line 12 ~ MaxPrice",MaxPrice)
            //console.log("🚀 ~ file : filterReducer.js ~ line 13 ~ MinPrice",MinPrice)

            return {
                ...state,
                filter_vehicle:[...action.payload],
                all_products:[...action.payload],
                filters:{
                    ...state.filters,
                    MaxPrice:MaxPrice,
                    price:MaxPrice,
                    //MinPrice:MinPrice
                    }
            };
        case "LOAD_FILTER_PRODUCTS_ACCESSORIES":
            return {
                ...state,
                filter_acc:[...action.payload],
                all_acc:[...action.payload],
            };
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view:true
            }
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view:false
            }
        case "UPDATE_FILTER_VALUE":
            const {name,value}=action.payload;
            return {...state,
                    filters:{...state.filters,
                             [name]:value
                    },
            };
            case "UPDATE_FILTER_VALUE_ACCESSORIES":
                const {name_a,value_a}=action.payload;
                console.log('name_a:',name_a);
                console.log('value_a:',value_a);
                return {...state,
                    filters_a:{...state.filters_a,
                                 [name_a]:value_a
                        },
                };
            case "FILTER_PRODUCT":
                let { all_products } = state;
                let tempFilterProduct =[...all_products]
                // tempFilterProduct =tempFilterProduct.data();
                const {text ,category,company,fuel,locations ,price} =state.filters;
                if(text){
                    tempFilterProduct =tempFilterProduct.filter((current)=>{
                        const fin =current.data().companyMake;
                        return fin.toLowerCase().startsWith(text)
                    })
                }
                if (price){
                    tempFilterProduct =tempFilterProduct.filter((CurElem)=>
                    {
                        const fin =CurElem.data();
                        return fin.price <= price
                    }
                    )
                }
            // if(category !== 'all'){
            //     tempFilterProduct =tempFilterProduct.filter((current)=>{
            //         const fin =current.data();
            //         return fin.toLowerCase().startsWith('hy')
            //     })
            // }
            if(company !== 'all' ){
                tempFilterProduct =tempFilterProduct.filter((current)=>{
                    const fin =current.data();
                    return (fin.companyMake.toLowerCase() == company.toLowerCase())
                })
            }
            if(fuel !== 'all' ){
                tempFilterProduct =tempFilterProduct.filter((current)=>{
                    const fin =current.data();
                    return (fin.Fuel.toLowerCase() == fuel.toLowerCase())
                })
            }
            if(locations !== 'all' ){
                tempFilterProduct =tempFilterProduct.filter((current)=>{
                    const fin =current.data();
                    return (fin.Location.toLowerCase() == locations.toLowerCase())
                })
            }
            return {
                ...state,
                filter_vehicle:tempFilterProduct,
            }

            case "FILTER_PRODUCT_ACCESSORIES":
                let { all_acc } = state;
                let tempFilterACC =[...all_acc]
                const {text_a,locations_a} =state.filters_a;
                // console.log('fiii',state.filters_a.locations_a)
                if(text_a){
                    tempFilterACC =tempFilterACC.filter((current)=>{
                        const finy =current.data().partName;
                        return finy.toLowerCase().startsWith(text_a)
                    })
                    }
                if(locations_a !== 'all' ){
                    tempFilterACC =tempFilterACC.filter((current)=>{
                        const fin =current.data();
                        return (fin.Location.toLowerCase() == locations_a.toLowerCase())
                    })
                }
                return {
                    ...state,
                    filter_acc:tempFilterACC,
            }
            case "CLEAR_FILTERS":
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        text:'',
                        company:'all',
                        category:'all',
                        fuel:'all',
                        locations:'all',
                    },
                    filters_a:{
                        ...state.filters_a,
                        text_a:'',
                        locations_a: 'all'
                    }
                };
                default: return state;
    }
}
export default filterReducer;