const filterReducer =(state,action)=>{
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_vehicle:[...action.payload],
                all_products:[...action.payload],
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
                return {...state,
                    filters_a:{...state.filters_a,
                                 [name_a]:value_a
                        },
                };
            case "FILTER_PRODUCT":
                let { all_products } = state;
                let tempFilterProduct =[...all_products]
                // tempFilterProduct =tempFilterProduct.data();
                const {text ,category,company,fuel,locations} =state.filters;
                if(text){
                    tempFilterProduct =tempFilterProduct.filter((current)=>{
                        const fin =current.data().companyMake;
                        return fin.toLowerCase().startsWith(text)
                    })
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
                if(text_a){
                    tempFilterACC =tempFilterACC.filter((current)=>{
                        const finy =current.data().partName;
                        return finy.toLowerCase().startsWith(text_a)
                    })
                    }
                if(locations_a !== 'all' ){
                    tempFilterACC =tempFilterACC.filter((current)=>{
                        const fin =current.data();
                        return (fin.Location.toLowerCase() == locations.toLowerCase())
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
                };
                default: return state;
    }
}
export default filterReducer;