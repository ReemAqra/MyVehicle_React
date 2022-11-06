import React, {useEffect, useState} from 'react';
import {FilledInput, FormControl, Grid, InputAdornment, InputLabel, Select, Stack, TextField} from '@mui/material';
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
import {PhotoCamera, Power} from "@mui/icons-material";
import ImageUploading from 'react-images-uploading';
import { alpha, styled } from '@mui/material/styles';
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, DesktopDatePicker, LocalizationProvider, MobileDatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {motion} from "framer-motion";
import Alert from "@mui/material/Alert";
import Axios from 'axios'
import {AiFillDelete} from 'react-icons/ai'
import {GrDocumentUpdate} from 'react-icons/gr'
import {useNavigate} from "react-router-dom";

export default function AddVehicles () {

    const [images, setImages] = React.useState([]);
    const [vehicleModel,setvehicleModel]=useState('')//select
    const [vehiclefual,setvehiclefual]=useState('')//select
    const [Gear,setGear]=useState('')//select
    const [ModelYear,setModelYear]=useState('')
    const [vehiclePower,setvehiclePower]=useState('')
    const [vehicleMileage,setvehicleMileage]=useState('')
    const [vehicleBodyColor,setvehicleBodyColor]=useState('')
    const [LicenseExpiryDate,setLicenseExpiryDate]=useState('')
    const [Description,setDescription]=useState('')

    const [sellingMethod,setsellingMethod]=useState()
    const [vehiclePrice,setvehiclePrice]=useState()
    const [vehicleLocation,setvehicleLocation]=useState()

    const [error,seterror]=useState('')
    const [currentstep,setcurrentstep]=useState(0)
    const maxNumber =5;
    const navigate =useNavigate();


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
    const handleshare =async (e)=>{
        e.preventDefault()

        try {
           await Axios.post('http://localhost:3000/vehicles',{

               vehicleModel: vehicleModel,
               vehicleFuel:vehiclefual,
               vehicleGear:Gear,
               vehicleLocation:vehicleLocation,
               vehicleModelYear:ModelYear,
               vehiclePrice: vehiclePrice,
               vehiclePower: vehiclePower,
               vehicleMileage: vehicleMileage,
               vehicleBodyColor:vehicleBodyColor,
               ExpiryDate: LicenseExpiryDate,
               vehicleSellingMethod: sellingMethod,
               Description:Description,
           }).then(function (response){
                console.log(response);
           }).catch((err)=>{
               console.log(err);
           })

            navigate('./../account')


        }catch (e){
            seterror(e.message)
            console.log(e.message)
        }
    }
    useEffect(()=>{

    },[])
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
    const renderButton =({lable,variant,color,hanbleOnClick})=>{
        return (
            <Button
                variant={variant ? variant:"outlined"}
                color={color ? color:'warning'}
                onClick={hanbleOnClick}
                size="medium"
            >
                {lable}
            </Button>
        )
    }

    const step1= ()=>{
        return(
            <>
                <Box className={'w-100'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                <InputLabel id="vehicleModelID">Model</InputLabel>
                                <Select labelId="vehicleModelID"
                                        value={vehicleModel}
                                        onChange={(e)=>{
                                            setvehicleModel(e.target.value)
                                            console.log(vehicleModel)
                                        }}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={'SEAT'}>SEAT</MenuItem>
                                    <MenuItem value={'KIA'}>KIA</MenuItem>
                                    <MenuItem value={'Mercedes'}>Mercedes</MenuItem>
                                    <MenuItem value={'Volkswagen'}>Volkswagen</MenuItem>
                                    <MenuItem value={'BMW'}>BMW</MenuItem>
                                    <MenuItem value={'Range Rover'}>Range Rover</MenuItem>
                                    <MenuItem value={'Toyote'}>Toyote</MenuItem>
                                    <MenuItem value={'Mitsubishi'}>Mitsubishi</MenuItem>
                                    <MenuItem value={'Nissan'}>Nissan</MenuItem>
                                    <MenuItem value={'Renault'}>Renault</MenuItem>
                                    <MenuItem value={'Hyundai'}>Hyundai</MenuItem>
                                    <MenuItem value={'Honda'}>Honda</MenuItem>
                                    <MenuItem value={'Ferrari'}>Ferrari</MenuItem>
                                    <MenuItem value={'OPEL'}>OPEL</MenuItem>
                                    <MenuItem value={'AUDI'}>AUDI</MenuItem>
                                    <MenuItem value={'Ford'}>Ford</MenuItem>
                                    <MenuItem value={'PORSCHE'}>PORSCHE</MenuItem>
                                    <MenuItem value={'Cadillac'}>Cadillac</MenuItem>
                                    <MenuItem value={'VOLVO'}>VOLVO</MenuItem>
                                    <MenuItem value={'SKODA'}>SKODA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                <InputLabel  id="vehicleFuelID">Fuel</InputLabel>
                                <Select labelId="vehicleFuelID"
                                        value={vehiclefual}
                                        onChange={(e)=>{
                                            setvehiclefual(e.target.value)
                                            console.log(vehiclefual)
                                        }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Gasoline'}>Gasoline</MenuItem>
                                    <MenuItem value={'Diesel'}>Diesel</MenuItem>
                                    <MenuItem value={'Biodiesel'}>Biodiesel</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                <InputLabel  id="vehicleGearID">Gear</InputLabel>
                                <Select labelId="vehicleGearID"
                                        value={Gear}
                                        onChange={(e)=>{
                                            setGear(e.target.value)
                                            console.log(Gear)
                                        }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Automatic'}>Automatic</MenuItem>
                                    <MenuItem value={'Manual'}>Manual</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <Stack spacing={4} color={"warning"}>
                                    <DatePicker minDate={dayjs('1950-01-01')}
                                                disableFuture
                                                views={['year']}
                                                label="Year of release"
                                                value={ModelYear}
                                                onChange={(newValue) => {setModelYear(newValue)
                                                    console.log(ModelYear);}}
                                                renderInput={(params) => <TextField size={"small"}
                                                                                    variant={"filled"}
                                                                                    color={"warning"}
                                                                                    {...params}
                                                                                    helperText={null} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth sx={{}} variant="filled">
                                <InputLabel  color={"warning"} htmlFor="vehiclePowerID">Power</InputLabel>
                                <FilledInput size={"small"}
                                             color={"warning"}
                                             id="vehiclePowerID"
                                             value={vehiclePower}
                                             onChange={(e)=>{setvehiclePower(e.target.value)
                                                 console.log(vehiclePower)}}
                                             endAdornment={<InputAdornment position="start">CC</InputAdornment>}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth sx={{}} variant="filled">
                                <InputLabel  color={"warning"} htmlFor="vehicleMileageID">Mileage</InputLabel>
                                <FilledInput size={"small"}
                                             color={"warning"}
                                             id="vehicleMileageID"
                                             value={vehicleMileage}
                                             onChange={(e)=>{setvehicleMileage(e.target.value)
                                                 console.log(vehicleMileage)}}
                                             endAdornment={<InputAdornment position="start">KM</InputAdornment>}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label='Body Color' variant='filled' value={vehicleBodyColor}
                                       onChange={(e)=>{
                                           setvehicleBodyColor(e.target.value)
                                           console.log(vehicleBodyColor)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3} color={"warning"}>
                                    <DatePicker
                                        label="License Expiry Date"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={LicenseExpiryDate}
                                        onChange={(newValue) => {
                                            setLicenseExpiryDate(newValue);
                                            console.log(LicenseExpiryDate)
                                        }}
                                        renderInput={(params) => <TextField size={"small"}
                                                                            variant={"filled"}
                                                                            color={"warning"}
                                                                            {...params}
                                                                            helperText={null} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>


                    </Grid>
                </Box>
                <Box className='w-100'  minHeight='50px'>
                    <Grid container mt={4} spacing={2} justifyContent={'center'}  >
                        <Button
                            variant={"outlined"}
                            color={'warning'}
                            onClick={()=> {
                                if ((vehicleModel === '') || (vehiclefual  === '') || (vehicleMileage === '') || (vehicleBodyColor === '') || (Gear === '') || (LicenseExpiryDate === '') ) {
                                    seterror('fill all requirement ')
                                }else {
                                    seterror('')
                                    setcurrentstep(currentstep+1)
                                }
                            }}
                            size="medium"
                        >Next
                        </Button>
                    </Grid>
                </Box>
            </>
        )
    }

    const onChange = (imageList, addUpdateIndex) => {

        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const step2= ()=>{
        return(
            <>
                <Box mt={4} mb={2} >
                    {renderText({label: "Step 2 : Selling Info"})}
                </Box>
                <Box className={'w-100 mt-1'}>
                    <Grid container spacing={2} className={'justify-content-center text-center d-flex align-items-center'}>
                        <Grid item xs={12} sm={10}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"} required
                                       label='Selling Method' variant='filled' value={sellingMethod}
                                       onChange={(e)=>{setsellingMethod(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <FormControl fullWidth sx={{}} variant="filled">
                                <InputLabel required color={"warning"} htmlFor="vehiclePriceID">Price</InputLabel>
                                <FilledInput size={"small"}
                                             color={"warning"}
                                             id="vehiclePriceID"
                                             value={vehiclePrice}
                                             onChange={(e)=>{setvehiclePrice(e.target.value)}}
                                             endAdornment={<InputAdornment style={{fontSize:'1.5rem'}} position="start">₪</InputAdornment>}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                <InputLabel id="vehicleLocationID">Location</InputLabel>
                                <Select labelId="vehicleLocationID"
                                        value={vehicleLocation}
                                        onChange={(e)=>{
                                            setvehicleLocation(e.target.value)
                                            console.log(vehicleLocation)
                                        }}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={'Al-Birah'}>Al-Birah</MenuItem>
                                    <MenuItem value={'Al-lyd'}>Al-lyd</MenuItem>
                                    <MenuItem value={'Al-majdal'}>Al- majdal</MenuItem>
                                    <MenuItem value={'Al-Nasrah'}>Al-Nasrah</MenuItem>
                                    <MenuItem value={'Besan'}>Besan</MenuItem>
                                    <MenuItem value={'Bethlehem'}>Bethlehem</MenuItem>
                                    <MenuItem value={'Bir Al-sabe'}>Bir Al-sabe</MenuItem>
                                    <MenuItem value={'Dir Al-Balah'}>Dir Al-Balah</MenuItem>
                                    <MenuItem value={'Gaza'}>Gaza</MenuItem>
                                    <MenuItem value={'Haifa'}>Haifa</MenuItem>
                                    <MenuItem value={'Hebron'}>Hebron</MenuItem>
                                    <MenuItem value={'Jaffa'}>Jaffa</MenuItem>
                                    <MenuItem value={'Jenin'}>Jenin</MenuItem>
                                    <MenuItem value={'Jerusalem'}>Jerusalem</MenuItem>
                                    <MenuItem value={'Jericho'}>Jericho</MenuItem>
                                    <MenuItem value={'Khan Younis'}>Khan Younis</MenuItem>
                                    <MenuItem value={'Nablus'}>Nablus</MenuItem>
                                    <MenuItem value={'Ramla'}>Ramla</MenuItem>
                                    <MenuItem value={'Safad'}>Safad</MenuItem>
                                    <MenuItem value={'Salfit'}>Salfit</MenuItem>
                                    <MenuItem value={'Qalqilya'}>Qalqilya</MenuItem>
                                    <MenuItem value={'Ramallah'}>Ramallah</MenuItem>
                                    <MenuItem value={'Rafah'}>Rafah</MenuItem>
                                    <MenuItem value={'Tabaria'}>Tabaria</MenuItem>
                                    <MenuItem value={'Tulkarm'}>Tulkarm</MenuItem>
                                    <MenuItem value={'Tobas'}>Tobas</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                color={"warning"}
                                size={"small"}
                                fullWidth
                                label="Description"
                                value={Description}
                                multiline
                                onChange={(e)=>{setDescription(e.target.value)}}
                                rows={4}
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={2} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >
                            {renderButton({lable:"Previse",hanbleOnClick:handlePrev})}

                        </Grid>
                        <Grid item justifyContent={'flex-end'} >
                            <Button
                                variant={"outlined"}
                                color={'warning'}
                                onClick={()=> {
                                    if ((vehicleModel === '') || (vehiclefual  === '') || (vehicleMileage === '') || (vehicleBodyColor === '') || (Gear === '') || (LicenseExpiryDate === '') ) {
                                      seterror('requied field')
                                    }else { setcurrentstep(currentstep+1)}
                                }}
                                size="medium"
                            >Next
                            </Button>
                        </Grid>
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
                <Box >
                    <ImageUploading multiple
                                    value={images}
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
                            <Box  minWidth={'100%'}>
                                <Button  style={isDragging ? { color: "red" } :
                                    { backgroundColor:'#d3d9dc',minWidth:'350px',minHeight:'80px',
                                    border:'3px dashed white',color:'#3e5a6e'}}
                                        onClick={onImageUpload}
                                        {...dragProps}>
                                    <PhotoCamera  style={{color:'#3e5a6e'}}  />
                                </Button>
                                &nbsp;
                                {/*<Button onClick={onImageRemoveAll}>Remove all images</Button>*/}
                                {imageList.map((image, index) => (
                                    <Box xs={12} sm={3} p={2} key={index} className="d-flex ">
                                        <img src={image.data_url} alt="" width="100" />
                                        <Box m={1}   className="image-item__btn-wrapper">
                                            <Button m={1} variant="contained" color="warning"   onClick={() => onImageUpdate(index)}><GrDocumentUpdate /></Button>
                                            <Button m={1} variant="contained" color="warning"  onClick={() => onImageRemove(index)}><AiFillDelete /></Button>
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
    const Finished= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {renderText({
                        label: "Finished"})}
                    <Typography>vehicleModel: {vehicleModel}</Typography>
                    <Typography>vehiclefual: {vehiclefual}</Typography>
                    <Typography>Gear: {Gear}</Typography>
                    <Typography>Model Year: {JSON.stringify(ModelYear)}</Typography>
                    <Typography>vehiclePower: {vehiclePower}</Typography>
                    <Typography>vehicle Mileage: {vehicleMileage}</Typography>
                    <Typography>vehicle Body Color : {vehicleBodyColor}</Typography>
                    <Typography>License Expiry Date: {JSON.stringify(LicenseExpiryDate)}</Typography>
                    <Typography>selling Method: {sellingMethod}</Typography>
                    <Typography>vehiclePrice: {vehiclePrice}</Typography>
                    <Typography>Loaction :{vehicleLocation}</Typography>
                    <Typography>Description :{Description}</Typography>
                    {images.map((image ,index) => (
                        <Box sx={2} key={index}>
                            <img src={image.data_url} alt="" width="100" />

                        </Box>
                        ))
                    }
                </Box>
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={5} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}</Grid>
                        <Grid item justifyContent={'flex-end'} >{renderButton({lable:"share",hanbleOnClick:handleshare})}</Grid>
                    </Grid>
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
                               <Box ml={5} color={'warning'} style={{marginRight:'10px'}}
                                    className=' p-3 ms-5 m-auto end-0 justify-content-center align-items-center  text-center '  >
                                   <Stepper
                                       color={'warning'}
                                       className={c.root}
                                       style={{marginRight:'-40%'}}
                                       alternativeLabel
                                       activeStep={currentstep} >
                                       {stepperStep.map((item,i) => (
                                           <Step color={'warning'} key={i}>
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
               <form className={'top-0 d-flex mt-3 mb-3'}  style={{minHeight:"350px" ,minWidth:'100%'}}>
                   {error && <Alert className={'mb-2 w-100'}  severity="error">{error} —— check it out!</Alert>}

                   {getStepitem(currentstep)}
               </form>
           </>
    );
}