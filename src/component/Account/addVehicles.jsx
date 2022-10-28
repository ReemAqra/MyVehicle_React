import React, {useState} from 'react';
import {Grid, Stack, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import ImageUploading from 'react-images-uploading';
import { alpha, styled } from '@mui/material/styles';

export default function AddVehicles () {

    const [vehiclePic,setvehiclePic]=useState([])

    const [error,seterror]=useState('')
    const maxNumber =5;
    const [vehicleMake,setvehicleMake]=useState('')
    const [vehicleMade,setvehicleMade]=useState(null)
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
    const renderText =({label,color,align,variant,fontSize,value})=> {
       return( <Typography
               fontSize={fontSize ? fontSize:'20px'}
               color={color ? color : "#3e5a6e"}
               align={align ? align : "center"}
               variant={variant ? variant : "h6"}
               fontFamily='fantasy'>
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
                    if(e.target.value.length === 4 ){
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

    const RedditTextField = styled((props) => (
        <TextField InputProps={{ disableUnderline: true }} {...props} />
    ))(({ theme }) => ({
        '& .MuiFilledInput-root': {
            border: '1px solid #e2e2e1',
            overflow: 'hidden',
            borderRadius: 4,
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#b21c1c',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&.Mui-focused': {
                backgroundColor: 'transparent',
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));    const step1= ()=>{
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
                                label:"Make",
                                name:"vehicleMake"
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RedditTextField
                                label="Reddit"
                                defaultValue="react-reddit"
                                id="reddit-input"
                                variant="filled"
                                style={{ marginTop: 11 }}
                            />
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

    const [images, setImages] = React.useState([]);
    const onChange = (imageList, addUpdateIndex) => {

        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const step2= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {renderText({
                        label: "stepper component step 2"})}
                </Box>
                <Box className="App">
                    <ImageUploading multiple
                                    name={images}
                                    onChange={onChange}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                    acceptType={["jpg"]}>
                        {({
                              imageList, onImageUpload,
                              onImageRemoveAll, onImageUpdate,
                              onImageRemove, isDragging, dragProps
                          }) => (
                            // write your building UI
                            <Box className="upload__image-wrapper">
                                <button style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}>
                                    Click or Drop here
                                </button>
                                &nbsp;
                                <button onClick={onImageRemoveAll}>Remove all images</button>
                                {imageList.map((image, index) => (
                                    <Box key={index} className="image-item">
                                        <img src={image.data_url} alt="" width="100" />
                                        <Box className="image-item__btn-wrapper">
                                            <button onClick={() => onImageUpdate(index)}>Update</button>
                                            <button onClick={() => onImageRemove(index)}>Remove</button>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </ImageUploading>
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
                        label: "Upload car img"})}
                </Box>
                <Box p={2} color='pink' mt={2} mb={2} style={{
                         backgroundColor:'#d3d9dc', justifyContent:'center',
                         alignItems:'center',display:'flex' ,flexDirection:'column',
                         minWidth:'350px',minHeight:'200px',
                         border:'3px dashed white'}}>
                     <Stack direction="row" alignItems="center" spacing={2}>
                         <IconButton color="primary" aria-label="upload picture" component="label">
                             <input
                                 name="vehiclePic"
                                    hidden
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        setvehiclePic(e.target.files)
                                        console.log(vehiclePic)
                                    }}
                                    accept="image/*"
                                    type="file" />
                             <PhotoCamera  style={{color:'#3e5a6e'}}  />

                         </IconButton>
                     </Stack>

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
                   <Grid  item xs={12} sm={12} className=' w-100' >
                       <Paper >
                           <Box minHeight='50px' pt={2} className='' component={Paper}>
                               {renderText({label: "New car ad", fontSize:'40px'})}
                               <Box ml={5} style={{marginRight:'10px'}} className='p-3 ms-5 m-auto end-0 justify-content-center align-items-center  text-center '  >
                                   <Stepper
                                       className={c.root}
                                       style={{marginRight:'-40%'}}
                                       alternativeLabel
                                       activeStep={currentstep} >
                                       {stepperStep.map((item,i) => (
                                           <Step key={i}>
                                               <StepLabel >{item.label}</StepLabel>
                                           </Step>
                                       ))}
                                   </Stepper>
                               </Box>
                           </Box >
                       </Paper>
                       <Box  component={Paper}>
                       </Box>
                   </Grid>
               </Grid>
               <form className={'top-0 d-flex mt-3 mb-3'}  style={{minHeight:"400px"}}>
                   {getStepitem(currentstep)}
               </form>
           </>
    );
}