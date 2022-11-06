import React, {Component} from 'react';
import axios from 'axios'
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
class Product extends Component {

    componentDidMount(){
        axios.get('/vehicles')
             .then(res =>{
                 this.setState({
                    vehicles:res.data
                 })

             })
    }
    state ={
       products :[
           {id:1,Made:'kia',Distance:'180',Price:'200000',NumberOfDors:'4',GearType:'Manual',Model:'2021'},
           {id:2,Made:'BMW',Distance:'60',Price:'250000',NumberOfDors:'4',GearType:'Manual',Model:'2015'},
           {id:3,Made:'mercedes',Distance:'500',Price:'70000',NumberOfDors:'4',GearType:'Automatic',Model:'2019'},
           {id:4,Made:'Audi',Distance:'350',Price:'200000',NumberOfDors:'4',GearType:'Automatic',Model:'2020'},
       ],
       vehicles :null
 
    }

    render() {
        const stepperStep =[
            {label:'campaign'},
            {label:'campaign'},
            {label:'kkkkkk kkk'},

        ]
        return (
            <>
                <div className="bg-primary">
                    <h1 className=" bg-info">Product component</h1>
                    <div className="m-2 row">
                        {this.state.products.map((product )=>
                            <div className=" bg-secondary col-sm-6 col-md-4 col-lg-3 ">
                                <p>Made: {product.Made}</p>
                                <p>Price: {product.Price}</p>
                                <p>Model: {product.Model}</p>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Product;