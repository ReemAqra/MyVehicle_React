import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Backdrop,
    CircularProgress,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    Select, Slide, Snackbar,
    Stack,
    TextField
} from '@mui/material';
import {collection ,getDocs,setDoc,doc} from 'firebase/firestore'
import {auth, db} from "../../FireDB";

import { makeStyles } from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ImageUploading from "react-images-uploading";
import {PhotoCamera} from "@mui/icons-material";
import {GrDocumentUpdate, GrUpdate} from "react-icons/gr";
import {AiFillDelete} from "react-icons/ai";
import Alert from "@mui/material/Alert";
import './accessories.Model.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'react-i18next';
export default function AddAccessories (props) {

    const email = props.email
    const { t, i18n } = useTranslation();
    console.log(email);
    const [CarType,setCarType]=React.useState('')
    const [PartName,setPartName]=React.useState('')
    const [Code,setCode]=React.useState('')
    const [Weight,setWeight]=React.useState('')

    const [Location,setLocation]=React.useState()
    const [Price,setPrice]=React.useState('')
    const [Description,setDescription]=useState('')

    const [images, setImages] = useState([]);
    const [activeimg,setactiveimge] = React.useState(null)

    const [error,seterror]=useState('')
    const [currentstep,setcurrentstep]=useState(0)
    const [index,setindex]=useState(0)
    const [prog,setprog]=useState(0)
    const maxNumber =3;
    const navigate =useNavigate();

    const useStyles = makeStyles(() => ({
        root: {
            "& .MuiStepIcon-active": { color: "red" },
            "& .MuiStepIcon-completed": { color: "green" } ,
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
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handlePrev =()=>{
        setcurrentstep(currentstep-1)
    }
    useEffect(()=>{
        // handleshare();
    },[])
    const [imagesURL, setImagesURL] = useState([]);

    const handleshare=  (Transition) => async() =>{

        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };
        images.map((imge,index)=>{
            const storageRef = ref(storage, `imagesAccessories/${imge.file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, imge.file, metadata);
            uploadTask.on("state_changed",async (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setprog(progress)
                if(progress === 100){
                    navigate('./../account')
                    console.log("=============>> lenght ",images.length)
                    if(index == images.length-1){
                        await setDoc(doc(collection(db, "accessories")), {
                            email:email,
                            PartName: PartName,
                            CarType:CarType,
                            Code:Code,
                            Weight:Weight,
                            Location:Location,
                            Price:Price,
                            Description:Description,
                            // image:[
                            //     imagesURL[0],
                            //     images[1] && images[1].file.name ? images[1].file.name : null  ,
                            //     images[2] && images[2].file.name ? images[2].file.name : null  ],
                            images:[
                                  imagesURL.length >= 1 ?  imagesURL[0]: null  ,
                                  imagesURL.length >= 2 ?  imagesURL[1]: null  ,
                                 // imagesURL[2],
                                   imagesURL.length >= 3 ?  imagesURL[2]: null  ,
                                // imagesURL[1]  ,imagesURL[2]  ,
                            ]
                        });
                    }

                    return <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                            your ad uploading successfully
                        </Alert>
                    </Snackbar>
                }else {
                    return (<LinearProgress color="warning" />)}
                }, (error) => {console.log(error)},   () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at =>', downloadURL);
                    imagesURL.push(downloadURL)
                     // console.log('available at =>', imagesURL);
                });
            })
        })


        console.log("=============>> img: ",imagesURL[0])


        setTransition(() => Transition);
        setOpen(true);

        console.log("=============>> ",imagesURL[0])
    }




    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
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

                <Box mt={4} mb={2} >
                    {/*{renderText({label: "Step 1 : Selling Info" })}*/}
                    <Typography
                        fontSize={'20px'}
                        color={ "#3e5a6e"}
                        align={"center"}
                        variant={ "h6"}
                        fontFamily='fantasy'>
                        {t("Step 1 : Selling Info")}
                    </Typography>
                </Box>
                <Box className={'w-100 mt-2'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label={t('Car Type')} variant='filled' value={CarType}
                                       onChange={(e)=>{setCarType(e.target.value)}}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label={t("Part Name")} variant='filled' value={PartName}
                                       onChange={(e)=> {
                                           setPartName(e.target.value)}}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                       label={t('Code')} variant='filled' value={Code}
                                       onChange={(e)=>{
                                           setCode(e.target.value)
                                           console.log(Code)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth sx={{}} variant="filled">
                                <InputLabel  color={"warning"} htmlFor="PriceID">{t("Price")}</InputLabel>
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
                                       label={t('Weight')} variant='filled' value={Weight}
                                       onChange={(e)=>{
                                           setWeight(e.target.value)
                                           console.log(Weight)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                <InputLabel id="LocationID">{t("Location")}</InputLabel>
                                <Select labelId="LocationID"
                                        value={Location}
                                        onChange={(e)=>{
                                            setLocation(e.target.value)
                                            console.log(Location)
                                        }}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Al-Birah">{t("Al-Birah")}</MenuItem>
                                    <MenuItem value="Al-lyd">{t("Al-lyd")}</MenuItem>
                                    <MenuItem value="Al-majdal">{t("Al-majdal")}</MenuItem>
                                    <MenuItem value="Al-Nasrah">{t("Al-Nasrah")}</MenuItem>
                                    <MenuItem value="Besan">{t("Besan")}</MenuItem>
                                    <MenuItem value="Bethlehem">{t("Bethlehem")}</MenuItem>
                                    <MenuItem value="Bir Al-sabe">{t("Bir Al-sabe")}</MenuItem>
                                    <MenuItem value="Dir Al-Balah">{t("Dir Al-Balah")}</MenuItem>
                                    <MenuItem value="Gaza">{t("Gaza")}</MenuItem>
                                    <MenuItem value="Haifa">{t("Haifa")}</MenuItem>
                                    <MenuItem value="Hebron">{t("Hebron")}</MenuItem>
                                    <MenuItem value="Jaffa">{t("Jaffa")}</MenuItem>
                                    <MenuItem value="Jenin">{t("Jenin")}</MenuItem>
                                    <MenuItem value="Jerusalem">{t("Jerusalem")}</MenuItem>
                                    <MenuItem value="Jericho">{t("Jericho")}</MenuItem>
                                    <MenuItem value="Khan Younis">{t("Khan Younis")}</MenuItem>
                                    <MenuItem value="Nablus">{t("Nablus")}</MenuItem>
                                    <MenuItem value="Ramla">{t("Ramla")}</MenuItem>
                                    <MenuItem value="Safad">{t("Safad")}</MenuItem>
                                    <MenuItem value="Salfit">{t("Salfit")}</MenuItem>
                                    <MenuItem value="Qalqilya">{t("Qalqilya")}</MenuItem>
                                    <MenuItem value="Ramallah">{t("Ramallah")}</MenuItem>
                                    <MenuItem value="Rafah">{t("Rafah")}</MenuItem>
                                    <MenuItem value="Tabaria">{t("Tabaria")}</MenuItem>
                                    <MenuItem value="Tulkarm">{t("Tulkarm")}</MenuItem>
                                    <MenuItem value="Tobas">{t("Tobas")}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                color={"warning"}
                                size={"small"}
                                fullWidth
                                label={t("Description")}
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
                                setcurrentstep(currentstep+1)}
                            }
                            size="medium"
                        >{t("Next")}
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
                    {/*{renderText({label: "Step 2 : Images Upload"})}*/}
                    <Typography
                        fontSize={'20px'}
                        color={ "#3e5a6e"}
                        align={"center"}
                        variant={ "h6"}
                        fontFamily='fantasy'>
                        {t("Step 2 : Images Upload")}
                    </Typography>
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
                                            <Button m={1}  variant="contained" c  style={{color:'white',borderColor:'gray',
                                                marginRight: '18px',background:'gray',
                                            }} onClick={() => onImageUpdate(index)}>
                                              <i className={'me-2'} style={{color:"white"}}><GrUpdate /></i>Update
                                            </Button>
                                            <Button m={1} variant="contained" style={{color:'white',borderColor:'gray',
                                                marginRight: '18px',background:'gray',
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
                    <Grid container mt={2} spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >
                            {/*{renderButton({lable:"Previse",hanbleOnClick:handlePrev})}*/}
                            <Button
                                variant={"outlined"}
                                color={'warning'}
                                onClick={()=> {
                                    setcurrentstep(currentstep -1)}
                                }
                                size="medium"
                            >{t("Previse")}
                            </Button>
                        </Grid>
                        <Grid item justifyContent={'flex-end'} >
                            <Button
                                variant={"outlined"}
                                color={'warning'}
                                onClick={()=> {
                                    setcurrentstep(currentstep+1)}
                                }
                                size="medium"
                            >{t("Next")}
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
                <Box width={'100%'}>
                    {/*{renderText({*/}
                    {/*    label: "Finished"})}<hr/>*/}
                    <Grid container spacing={2} width={'100%'} >
                        <Grid item xs={12} sm={6}>
                            <img src={images[index].data_url} alt="" height='400px' width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>Part Name: </Typography></Grid>
                                <Grid item xs={6}> <Typography>{PartName}</Typography></Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>CarType:</Typography></Grid>
                                <Grid item xs={6}> <Typography>{CarType}</Typography></Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>Code:</Typography></Grid>
                                <Grid item xs={6}> <Typography>{Code}</Typography></Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>Weight:</Typography></Grid>
                                <Grid item xs={6}> <Typography>{Weight}</Typography></Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>Location:</Typography></Grid>
                                <Grid item xs={6}> <Typography>{Location}</Typography></Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>Price:</Typography></Grid>
                                <Grid item xs={6}> <Typography>{Price}</Typography></Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12} >
                                <Grid item xs={6}> <Typography className={'fs-5 '} style={{fontFamily:'fantasy'}}>Description:</Typography></Grid>
                                <Grid item xs={6}> <Typography>{Description}</Typography></Grid>
                            </Grid>
                            <Grid container m={0} spacing={4} xs={12} >
                                {images.map((image ,index) => (
                                    <Box className={`Box`} sx={2}  key={index}>
                                        <img className={handleactivetabs(index)} src={image.data_url}
                                             onClick={()=>{handletab(index)}}
                                             alt="" width="70" height='70'
                                        />
                                    </Box>
                                ))
                                }
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
                <Box className='w-100' mt={2}  minHeight='40px'>
                    <Grid container spacing={3}  justifyContent={'center'} >
                        <Grid item justifyContent={'flex-start'} >
                            {renderButton({lable:"Previse",hanbleOnClick:handlePrev})}
                        </Grid>
                        <Grid item justifyContent={'flex-end'} >
                            <Button variant={"outlined"} color={'warning'} onClick={handleshare(TransitionLeft)} size="medium">share</Button>
                        </Grid>
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
    useEffect(()=>{

    },[])

    return(
        <>
            <Grid container  className={'w-100 h-100 justify-content-center align-items-center '}>
                <Grid   item xs={12} sm={12} className='w-100' >
                    <Paper >
                        <Box minHeight='50px' pt={2} className='' component={Paper}>
                            {/*{renderText({label: "New Accessories ad", fontSize:'40px'})}*/}
                            <Typography
                                fontSize={'40px'}
                                color={ "#3e5a6e"}
                                align={"center"}
                                variant={ "h6"}
                                fontFamily='fantasy'>
                                {t("New Accessories ad")}
                            </Typography>

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
