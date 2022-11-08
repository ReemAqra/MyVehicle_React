import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FilledInput, FormControl, Grid, InputAdornment, InputLabel, Select, Stack, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import ImageUploading from "react-images-uploading";
import {PhotoCamera} from "@mui/icons-material";
import {GrDocumentUpdate} from "react-icons/gr";
import {AiFillDelete} from "react-icons/ai";
import Alert from "@mui/material/Alert";


export default function AddAccessories () {

    const [CarType,setCarType]=React.useState('')
    const [PartName,setPartName]=React.useState('')
    const [Code,setCode]=React.useState('')
    const [Weight,setWeight]=React.useState('')

    const [Location,setLocation]=React.useState()
    const [Price,setPrice]=React.useState('')
    const [Description,setDescription]=useState('')

    const [images, setImages] = React.useState([]);

    const [error,seterror]=useState('')
    const [currentstep,setcurrentstep]=useState(0)
    const maxNumber =3;
    const navigate =useNavigate();

    const useStyles = makeStyles(() => ({
        root: {
            "& .MuiStepIcon-active": { color: "red" },
            "& .MuiStepIcon-completed": { color: "green" },
            "& .Mui-disabled .MuiStepIcon-root": { color: '#3e5a6e' }
        }
    }));
    const c= useStyles()
    const stepperStep =[
        {label:''},
        {label:''},
        {label:''},
    ]
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
    const handleNext =()=>{
        setcurrentstep(currentstep+1)
    }
    const handlePrev =()=>{
        setcurrentstep(currentstep-1)
    }
    const onChange = (imageList, addUpdateIndex) => {

        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const getStepitem = (steps)=>{
        switch (steps){
            case 0:return step1();
            case 1:return step2();
            case 2:return Finished();
        }
    }

    const step1= ()=>{
        return(
            <>
                <Box mt={4} mb={2} >
                    {renderText({label: "Step 1 : Selling Info"})}
                </Box>
                <Box className={'w-100 mt-2'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label='Car Type' variant='filled' value={CarType}
                                       onChange={(e)=>{
                                           setCarType(e.target.value)
                                           console.log(CarType)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label='Part Name' variant='filled' value={PartName}
                                       onChange={(e)=>{
                                           setPartName(e.target.value)
                                           console.log(PartName)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label='Code' variant='filled' value={Code}
                                       onChange={(e)=>{
                                           setCode(e.target.value)
                                           console.log(Code)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth sx={{}} variant="filled">
                                <InputLabel  color={"warning"} htmlFor="PriceID">Price</InputLabel>
                                <FilledInput size={"small"}
                                             color={"warning"}
                                             id="PriceID"
                                             value={Price}
                                             onChange={(e)=>{setPrice(e.target.value)}}
                                             endAdornment={<InputAdornment style={{fontSize:'1.5rem'}} position="start">₪</InputAdornment>}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label='Weight' variant='filled' value={Weight}
                                       onChange={(e)=>{
                                           setWeight(e.target.value)
                                           console.log(Weight)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                <InputLabel id="LocationID">Location</InputLabel>
                                <Select labelId="LocationID"
                                        value={Location}
                                        onChange={(e)=>{
                                            setLocation(e.target.value)
                                            console.log(Location)
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
                        <Grid item xs={12} sm={12}>
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
                <Box className='w-100'  minHeight='50px'>
                    <Grid container mt={4} spacing={2} justifyContent={'center'}  >
                        <Button
                            variant={"outlined"}
                            color={'warning'}
                            onClick={()=> {
                                    seterror('')
                                    setcurrentstep(currentstep+1)

                            }}
                            size="medium"
                        >Next
                        </Button>
                    </Grid>
                </Box>
            </>
        )
    }
    const step2= ()=>{
        return(
            <>
                <Box mt={4} mb={2} >
                    {renderText({label: "Step 2 : Images Upload"})}
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
                    <Grid container mt={2} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}</Grid>
                        <Grid item justifyContent={'flex-end'} >
                            <Button
                                variant={"outlined"}
                                color={'warning'}
                                onClick={()=> {

                                        setcurrentstep(currentstep+1)}
                                }
                                size="medium"
                            >Next
                            </Button>
                        </Grid>
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
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={5} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}</Grid>

                    </Grid>
                </Box>
            </>
        )
    }
    useEffect(()=>{

    },[])

    return(
        <>
            <Grid container  className={'w-100 h-100 justify-content-center align-items-center '}>
                <Grid   item xs={12} sm={12} className='w-100' >
                    <Paper >
                        <Box minHeight='50px' pt={2} className='' component={Paper}>
                            {renderText({label: "New Accessories ad", fontSize:'40px'})}
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
                </Grid>
            </Grid>
            <form className={'top-0 d-flex mt-3 mb-3'}  style={{minHeight:"350px" ,minWidth:'100%'}}>
                {error && <Alert className={'mb-2 w-100'}  severity="error">{error} —— check it out!</Alert>}
                {getStepitem(currentstep)}
            </form>
        </>
    )

}
