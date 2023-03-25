import React, {useEffect, useState} from 'react';
import {
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    Select,
    Slide, Snackbar,
    Stack,
    TextField
} from '@mui/material';

//import { useSpring, animated } from '@react-spring/web'

import { makeStyles } from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PhotoCamera} from "@mui/icons-material";
import ImageUploading from 'react-images-uploading';
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Alert from "@mui/material/Alert";
import {AiFillDelete} from 'react-icons/ai'
import { GrUpdate} from 'react-icons/gr'
import {useNavigate} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import './accessories.Model.css'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import video1 from "../Product/makeup.mp4";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {collection,query, where, getDocs, doc, setDoc} from "firebase/firestore";
import {db} from "../../FireDB";
import {UseAuth} from "../../context/AuthContext";

export default function AddVehicles () {
    const {user,logout}=UseAuth();

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
    const [vehiclePrice,setvehiclePrice]=useState(0)
    const [vehicleLocation,setvehicleLocation]=useState()

    const [error,seterror]=useState('')
    const [currentstep,setcurrentstep]=useState(0)
    const [index,setindex]=useState(0)
    const [prog,setprog]=useState(0)
    const [activeimg,setactiveimge] = React.useState(null)
    const [imagesURL, setImagesURL] = useState([]);
    const [open, setOpen] = React.useState(false);

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
    const [transition, setTransition] = React.useState(undefined);
    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
    };

    const handleshare = (Transition) => async()=>{
        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };
        images.map((imge,index)=>{
            const storageRef = ref (storage, `imagesCars/${imge.file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, imge.file, metadata);
            uploadTask.on("state_changed",async (snapshot)=>{
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    console.log('Upload ~~~ ',images);
                    setprog(progress)
                const Req = await getDocs(query(collection(db, "Vehicle"),
                    where("Fuel", "==", vehiclefual)
                    ,where("companyMake" ,"==", vehicleModel),
                    where("Gear","==",Gear)))
                Req.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, "Request => ", doc.data());
                });
                    if(progress === 100){
                        navigate('./../Account')
                        console.log("====>> lenght ",images.length)
                        if(index === (images.length -1 )){
                            await setDoc(doc(collection(db, "Vehicle")), {
                                user:user.uid,
                                Fuel:vehiclefual,
                                companyMake:vehicleModel,
                                 Gear:Gear,
                                 Location:vehicleLocation,
                                carModel:ModelYear,
                                price:vehiclePrice,
                                 power:vehiclePower,
                                mileage:vehicleMileage,
                                 bodyColor:vehicleBodyColor,
                                 sellingMethod:sellingMethod,
                                 description:Description,
                                 Made:vehicleModel,
                                images:[
                                    imagesURL[0],
                                    imagesURL[1]  ? imagesURL[1]:null,
                                    imagesURL[2]  ? imagesURL[2]:null,
                                    imagesURL[3]  ? imagesURL[3]:null,
                                    imagesURL[4]  ? imagesURL[4]:null,

                                ]
                            });


                        }
                    }
                }, (error) => {console.log(error)},   () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at =>', downloadURL);
                        imagesURL.push(downloadURL)
                    });
                })
        })
        setTransition(() => Transition);
        setOpen(true)
    }
    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }

    const renderText =({label,color,align,variant,fontSize,value})=> {
       return( <Typography
               fontSize={fontSize ? fontSize:'20px'}
               color={color ? color : "#283885"}
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
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
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
    const handletab=(index)=>{
        setindex(index)
        setactiveimge(images[index])
    }
    const handleactivetabs=(index)=>{
        if(images[index] ===activeimg){
            return 'active'
        }else {return 'imge'}
    }

    const step1= ()=>{
        return(
            <>
                <Box className={'w-100 mt-5'}>
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
                                    <DatePicker
                                         // minDate={dayjs(new Date(2000))}
                                         disableFuture
                                         // selected={ModelYear}
                                         views={['year']}
                                         dateFormat="yyyy"
                                         label="Year of release"

                                         onChange={(newValue) => {
                                             setModelYear(dayjs(newValue).year().toString())
                                             console.log(ModelYear)}}
                                         renderInput={(params) =>
                                             <TextField size={"small"} variant={"filled"}
                                                        color={"warning"}
                                                        {...params} helperText={null} />}
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
                                            setLicenseExpiryDate(dayjs(newValue).format('DD/MM/YYYY').toString());
                                        console.log(LicenseExpiryDate)}}
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
                                }else if (ModelYear === 'NaN'){
                                    seterror('inter Year corectly ')
                                }
                                else {
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
    const handleClose = () => {
        setOpen(false);
    };
    const step2= ()=>{
        return(
            <>
                <Dialog
                    style={{backgroundColor:'rgba(0, 0, 0, 0.5)',margin:"auto"}}
                    open={open }

                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle bgcolor={'rgba(0, 0, 0, 0.5)'}>
                        <Button fullWidth style={{color:'white',fontFamily:'fantasy',fontSize:'20px'}} onClick={handleClose}>Skip</Button>
                    </DialogTitle>
                    <DialogActions bgcolor={'rgba(0, 0, 0, 0.5)'}>
                        {/*<section className={'d-flex align-items-center justify-content-center m-0 p-0'}>*/}
                        <video bgcolor={'rgba(0, 0, 0, 0.5)'} src={video1} autoPlay loop muted/>
                        {/*</section>*/}
                    </DialogActions>
                </Dialog>
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
                <Dialog
                 //   style={{height:'-webkit-fill-available'}}
                    open={open }
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>"User Information:"</DialogTitle>

                    <DialogActions>
                        <Button color={"warning"} onClick={handleClose}>Done</Button>
                    </DialogActions>
                </Dialog>
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
                                    { backgroundColor:'#d3d9dc',minWidth:'350px',minHeight:'70px',
                                    border:'3px dashed white',color:'#3e5a6e',marginBottom:'20px'}}
                                        onClick={onImageUpload}
                                        {...dragProps}>
                                    <PhotoCamera  style={{color:'#3e5a6e'}}  />
                                </Button>
                                &nbsp;
                                {/*<Button onClick={onImageRemoveAll}>Remove all images</Button>*/}
                                {imageList.map((image, index) => (
                                    <Box style={{borderRadius:'7px'}}  bgcolor={'#3e5a6e'}  xs={12}  sm={3} p={0} key={index} className="d-flex border border-1 ">
                                        <img   src={image.data_url} alt="" width="50" style={{borderRadius:'7px',justifyContent:"right"}} />
                                        <Box m={1} margin={"auto"} className="image-item__btn-wrapper">
                                            <Button m={1}  variant="contained" c  style={{color:'white',borderColor:'gray',background:'gray',
                                                marginRight: '18px'
                                            }} onClick={() => onImageUpdate(index)}>
                                                <i className={'me-2'} style={{color:"white"}}><GrUpdate /></i>Update
                                            </Button>
                                            <Button m={1} variant="contained" style={{color:'white',borderColor:'gray',background:'gray',
                                                marginRight: '18px'
                                            }} onClick={() => onImageRemove(index)}>
                                                <i className={'me-2'}><AiFillDelete /></i>Delete
                                            </Button>
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
                        {prog < 70 ? <Snackbar className={'w-25'} open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="info" variant="filled" sx={{ width: '100%' }}>
                                    uploaging...
                                </Alert>
                            </Snackbar>
                            : <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                                    your ad uploading successfully
                                </Alert>
                            </Snackbar>
                        }
                    </Grid>
                </Box>
            </>
        )
    }
    const Finished= ()=>{
        return(
            <>
                <Box mt={2} mb={2}>
                    {/*{renderText({label: "Finished"})}*/}

                    <Grid margin={"auto"}  container spacing={2} width={'100%'}>
                        <Grid item xs={12} sm={6}>
                            <Grid minHeight={'300px'}  container m={0} spacing={4} xs={12}>
                                <img src={images[index].data_url} alt="" height='400px' width="100%" />
                            </Grid>
                            <Grid container m={0}  justifyContent={"center"} spacing={4} xs={12} >
                                {images.map((image ,index) => (
                                    <Box className={`Box`} sx={2}  key={index}>
                                        <img className={handleactivetabs(index)} src={image.data_url}
                                             onClick={()=>{handletab(index)}}
                                             alt="" width="74" height='70'
                                        />
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={12} p={1}>
                                    <TextField label="Model" defaultValue={vehicleModel} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"} fullWidth/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6} p={1}>
                                    <TextField label="Fuel" defaultValue={vehiclefual} InputProps={{readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}/>
                                </Grid>
                                <Grid item xs={6} p={1}>
                                    <TextField label="Gear" defaultValue={Gear} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6} p={1}>
                                    <TextField label="Year of release" defaultValue={ModelYear} InputProps={{readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}/>
                                </Grid>
                                <Grid item xs={6} p={1}>
                                    <TextField label="Power" defaultValue={vehiclePower} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}
                                               startAdornment={<InputAdornment position="end">CC</InputAdornment>}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6} p={1}>
                                    <TextField label="Mileage" defaultValue={vehicleMileage} InputProps={{readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}
                                               startAdornment={<InputAdornment position="end">KM</InputAdornment>}/>
                                </Grid>
                                <Grid item xs={6} p={1}>
                                    <TextField label="Body Color" defaultValue={vehicleBodyColor} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}
                                             />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={12} p={1}>
                                    <TextField label="License Expiry Date" defaultValue={LicenseExpiryDate} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"} fullWidth/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={12} p={1}>
                                    <TextField label="Price" defaultValue={vehiclePrice} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"} fullWidth
                                               startAdornment={<InputAdornment position="start">₪</InputAdornment>}/>

                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6} p={1}>
                                    <TextField label="Selling Method" defaultValue={sellingMethod} InputProps={{readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}
                                             />
                                </Grid>
                                <Grid item xs={6} p={1}>
                                    <TextField label="Loaction" defaultValue={vehicleLocation} InputProps={{ readOnly: true,}}
                                               size={ "small"} variant="filled" color={"primary"}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={12} p={1}>
                                    <TextField label="Description" defaultValue={Description} InputProps={{ readOnly: true,}}
                                               rows={3} size={ "small"} variant="filled" color={"primary"} fullWidth/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box className='w-100' minHeight='50px'>
                    <Grid container mt={5} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}</Grid>
                        <Grid item justifyContent={'flex-end'} >
                            <Button variant={"outlined"} color={'warning'} onClick={handleshare(TransitionLeft) } size="medium">Double click to upload</Button>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }

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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grid direction="up" ref={ref} {...props} />;
});