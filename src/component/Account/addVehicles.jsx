import React, {useState} from 'react';
import { Grid, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddVehicles () {

    const [error,seterror]=useState('')
    const [vehiclePic,setvehiclePic]=useState('')
    const [vehicleMake,setvehicleMake]=useState('')
    const [vehicleMade,setvehicleMade]=useState()
    const [vehicleModel,setvehicleModel]=useState()
    const [vehiclefual,setvehiclefual]=useState()
    const [vehiclePrice,setvehiclePrice]=useState()
    const [vehiclePower,setvehiclePower]=useState()
    const [vehicleMileage,setvehicleMileage]=useState()
    const [vehicleBodyColor,setvehicleBodyColor]=useState()
    const [LicenseExpiryDate,setLicenseExpiryDate]=useState()
    const [sellingMethod,setsellingMethod]=useState()
    const [Description,setDescription]=useState('')
    const [Gear,setGear]=useState()
    const [vehicleLocation,setvehicleLocation]=useState()
    const [currentstep,setcurrentstep]=useState(0)

    const useStyles = makeStyles(() => ({
        root: {
            "& .MuiStepIcon-active": { color: "red" },
            "& .MuiStepIcon-completed": { color: "green" },
            "& .Mui-disabled .MuiStepIcon-root": { color: '#3e5a6e' }
        }
    }));
    const c= useStyles()


    const handleNext =()=>{
       setcurrentstep(currentstep+1)
    }
    const handlePrev =()=>{
       setcurrentstep(currentstep-1)
    }
    const renderText =({label,color,align,variant})=> {
       return( <Typography
            color={color ? color : "primary"}
            align={align ? align : "center"}
            variant={variant ? variant : "h6"}>
            {label}
       </Typography>
       )
    }
    const renderInputText =({label,name ,color})=> {
        return (
            <TextField
                error={error[vehicleMade] ? true:false}
                helperText={error}
                name='vehicleMade'
                label={label}
            color={color ? color : "primary"}
            variant="filled"
            size="small"
            value={vehicleMade}
            onChange={(e) => {
                if (e.target.value && e.target.value <=2022 ){
                    if(e.target.value.length ==4 ){
                        seterror('')
                        setvehicleMade(e.target.value)
                    }else {
                        seterror('Year of release 4-digit')
                        setvehicleMade(e.target.value)

                    }
                }else {
                    setvehicleMade(e.target.value)
                    seterror('required ')}

            }}
            fullWidth={true}
        />
        )};
    const renderButton =({lable,variant,color,hanbleOnClick})=>{
        return (
            <Button
                variant={variant ? variant:"outlined"}
                color={color ? color:'warning'}
                onClick={hanbleOnClick}
                size="small"
            >
                {lable}
            </Button>
        )
    }


    const step1= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {renderText({
                        label: "stepper component step 1"})}
                </Box>
                <Box className={'w-100'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {renderInputText({
                                label:"Year of release ",
                                name:"vehicleMade"
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {renderInputText({
                                label:"Year of release ",
                                name:"vehicleMade"
                            })}
                        </Grid>
                    </Grid>
                </Box>
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={5} spacing={2} justifyContent={'flex-end'}  >
                        {renderButton({lable:"Next",hanbleOnClick:handleNext})}

                    </Grid>
                </Box>
            </>
        )
    }
    const step2= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {renderText({
                        label: "stepper component step 2"})}
                </Box>
                <Box className={'w-100'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {renderInputText({
                                label:"Year of release ",
                                name:"vehicleMade"
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {renderInputText({
                                label:"Year of release ",
                                name:"vehicleMade"
                            })}
                        </Grid>
                    </Grid>
                </Box>
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={5} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}</Grid>
                        <Grid item justifyContent={'flex-end'} >{renderButton({lable:"Next",hanbleOnClick:handleNext})}</Grid>
                    </Grid>
                </Box>
            </>
        )
    }
    const step3= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {renderText({
                        label: "stepper component step 3"})}
                </Box>
                <Box className={'w-100'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {renderInputText({
                                label:"Year of release ",
                                name:"vehicleMade"
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {renderInputText({
                                label:"Year of release ",
                                name:"vehicleMade"
                            })}
                        </Grid>
                    </Grid>
                </Box>
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={5} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}</Grid>
                        <Grid item justifyContent={'flex-end'} >{renderButton({lable:"Next",hanbleOnClick:handleNext})}</Grid>
                    </Grid>
                </Box>
            </>
        )
    }
    const Finished= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {renderText({
                        label: "Finished"})}
                </Box>
            </>
        )
    }

    const getStepitem = (steps)=>{
        switch (steps){
            case 0:return step1();
            case 1:return step2();
            case 2:return step3();
            case 3:return Finished();

        }
    }
    const stepperStep =[
        {label:''},
        {label:''},
        {label:''},

    ]
    return (
           <>
               <Grid container className={' w-100   h-100 justify-content-center align-items-center'}>
                   <Grid  item xs={12} sm={12} className='w-100' >
                       <Paper >
                           <Box minHeight='50px' className='' component={Paper}>
                               {renderText({label: "stepper component"})}


                               <div className='p-3 ms-5 m-auto end-0 justify-content-center align-items-center  text-center ' minHeight='150px' >
                                   <Stepper className={c.root}
                                            style={{marginRight:'-20%'}}
                                            alternativeLabel
                                            activeStep={currentstep} >
                                       {stepperStep.map((item,i) => (
                                           <Step key={i}>
                                               <StepLabel >{item.label}</StepLabel>
                                           </Step>
                                       ))}
                                   </Stepper>

                               </div>

                           </Box >
                       </Paper>
                       <Box  component={Paper}>
                           <form className={'top-0 d-flex mt-3 mb-3'}  style={{minHeight:"400px"}}>
                               {getStepitem(currentstep)}
                           </form>
                       </Box>
                   </Grid>
               </Grid>

           </>
        );



}

