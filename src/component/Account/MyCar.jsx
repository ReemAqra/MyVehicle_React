import React, {Component, useState} from 'react';
import {
    ButtonGroup,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    Select,
    Slide,
    Stack,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {GiWeight} from "react-icons/gi";
import {AiOutlineQrcode} from "react-icons/ai";
import {ImLocation, ImPower} from "react-icons/im";
import {IoPricetagsSharp} from "react-icons/io5";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {RiChargingPileFill} from "react-icons/ri";
import {GoGear} from "react-icons/go";
import {IoMdColorPalette} from "react-icons/io";
import {BsFillCalendarDateFill} from "react-icons/bs";
import {MdSpeed} from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {db} from "../../FireDB";
import {updateDoc, doc, deleteDoc} from "firebase/firestore";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function MyCar(Props) {
    const { t, i18n } = useTranslation();
    const  current =Props.blog
    const [index, setIndex] = React.useState(0);
    const delay = 20000;
    const [open, setOpen] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [images]=useState([]);
    const [Car,setCar]=useState({
        carModel:current.data().carModel,
        Fuel:current.data().Fuel,
        companyMake:current.data().companyMake,
        Gear:current.data().Gear,
        Location:current.data().Location,
        price:current.data().price,
        power:current.data().power,
        mileage:current.data().mileage,
        bodyColor:current.data().bodyColor,
        sellingMethod:current.data().sellingMethod,
        description:current.data().description,
        Made:current.data().Made,
        licenseExpiry: current.data().licenseExpiry,
    })

    images.pop();
    images.pop();
    images.pop();
    images.pop();
    images.pop();
    images.push([current.data().images[0]])
    if(current.data().images[1] !== null){
        images.push(current.data().images[1])
    }if(current.data().images[2] !== null){
        images.push(current.data().images[2])}
        if(current.data().images[3] !== null){
            images.push(current.data().images[3])}
            if(current.data().images[4] !== null){
                images.push(current.data().images[4])}
    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay);
        return()=>{}
    }, [index])
    const handleClose = () => {
        setOpen(false);
        setOpenUpdate(false);
    };
    const [transition, setTransition] = React.useState(undefined);

    const handleDelete = ()=>{
        setOpen(true);
    }
    const Delete = (Transition) =>async ()=>{
        setTransition(() => Transition);
        setOpen(false)
        console.log(current)
        await deleteDoc(doc(db, "Vehicle", current.id));
    }
    const Update =(Transition,e)=>async ()=>{
        //setTransition(() => Transition);
       // await db.collection("Vehicle").doc(current.id).update({
       //      Fuel:Car.Fuel,
       //      companyMake:Car.companyMake,
       //      Gear:Car.Gear,
       //      Location:Car.Location,
       //      carModel:Car.carModel,
       //      price:Car.price,
       //      power:Car.power,
       //      mileage:Car.mileage,
       //      bodyColor:Car.bodyColor,
       //      sellingMethod:Car.sellingMethod,
       //      description:Car.description,
       //      Made:Car.Made,
       //  }).then(function() {
       //      console.log("USER  updated");
       //      window.location.reload();
       //
       //  });

         updateDoc(doc(db, 'Vehicle', current.id),{
             Fuel:Car.Fuel,
             companyMake:Car.companyMake,
             Gear:Car.Gear,
             Location:Car.Location,
             carModel:Car.carModel,
             price:Car.price,
             power:Car.power,
             mileage:Car.mileage,
             bodyColor:Car.bodyColor,
             sellingMethod:Car.sellingMethod,
             description:Car.description,
             Made:Car.Made,
        }).then(function() {
             console.log("USER  updated");
             window.location.reload();

         });




    }
    const handleUpdate =()=>{
        setOpenUpdate(true);
    }
    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }
        return (
            <>
                <Grid style= {{padding: '21px', marginRight: '-37px',}}>

                    <Grid mt={2} border={2} borderRadius={2} borderColor={"#b2c1cc"} marginRight={5}   container maxWidth spacing={2}>
                        <Box borderRadius={2} style={{background:"#f2f2f8"}}  sx={{
                            display: 'flex', '& > *': {m: 'auto',padding:'0', width: '100%',height: '100%',},}}  item xs={12} sm={2}>
                            <ButtonGroup orientation="vertical" aria-label="large vertical outlined button group " variant="text">
                                <Button   style={{height:'50%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} onClick={handleUpdate} key="one">update </Button>
                                <Button   style={{height:'50%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} onClick={handleDelete} key="one">Delete </Button>
                                  </ButtonGroup>
                        </Box>
                        <Grid  color={"red"} item xs={12} sm={4} >

                            <Warrper>
                                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                                    {images.map((item, idx) => (
                                        <div className="slide " key={idx}  >
                                            <img height={'200rem'} className={`${index === idx ?  "":"active"}`}  width={'100%'} src= {item} />
                                        </div>
                                    ))}
                                </div>
                                <div className="slideshowDots">
                                    {images.map((_, idx) => (
                                        <div key={idx}  onClick={() => {
                                            setIndex(idx);
                                        }} className={`${index === idx ? " slideshowDotactive" : "slideshowDot"}`} ></div>
                                    ))}
                                </div>
                            </Warrper>
                        </Grid>
                        <Grid style={{background:"#f2f2f8"}} item xs={12} sm={7} key={index} >
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={12}>
                                    <Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>{current.data().Made}</Typography>
                                </Grid>
                                <hr className={'m-auto'}/>
                                <Grid item xs={6}><Typography> {current.data().price} ₪</Typography></Grid>
                            </Grid>
                            <Grid maxWidth  container  mb={1}  border={1} borderColor={'#ccc'} borderRadius={2} padding={1}>
                                <Grid item xs={2}  >
                                    <Grid className={'opacity-50 mb-1 '} justifyContent={"center"} color={"navy"} alignItems={"center"} display={"flex"}>
                                        <RiChargingPileFill className={'me-1'} />
                                        {/*{t("Fuel")}*/}
                                    </Grid>
                                    <Grid fontFamily={"fantasy"} justifyContent={"center"} color={"black"} alignItems={"center"} display={"flex"}>{current.data().Fuel}</Grid>
                                </Grid>
                                <Grid item xs={2}  paddingLeft={3}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} color={"navy"} alignItems={"center"} display={"flex"}>
                                        <ImPower className={'me-1'}/>
                                        {/*{t("power")}(cc)*/}
                                    </Grid>
                                    <Grid  fontFamily={"fantasy"} justifyContent={"center"} color={"black"} alignItems={"center"} display={"flex"}>{current.data().power}KW</Grid>
                                </Grid>
                                <Grid item xs={2} paddingLeft={3}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} color={"navy"} alignItems={"center"} display={"flex"}>
                                        <GoGear className={'me-1'} />
                                        {/*{t("Gear")}*/}
                                    </Grid>
                                    <Grid  fontFamily={"fantasy"} justifyContent={"center"} color={"black"} alignItems={"center"} display={"flex"}>{current.data().Gear}</Grid>
                                </Grid>
                                <Grid item xs={2} paddingLeft={3}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} color={"navy"} alignItems={"center"} display={"flex"}>
                                        <IoMdColorPalette className={'me-1'} />
                                        {/*{t("Body Color")}*/}
                                    </Grid>
                                    <Grid  fontFamily={"fantasy"} justifyContent={"center"} color={"black"} alignItems={"center"} display={"flex"}>{current.data().bodyColor}</Grid>
                                </Grid>
                                <Grid item xs={2} paddingLeft={3}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} color={"navy"} alignItems={"center"} display={"flex"}>
                                        <BsFillCalendarDateFill className={'me-1'}/>
                                        {/*{t("license Expiry")}*/}
                                    </Grid>
                                    <Grid  fontFamily={"fantasy"}  justifyContent={"center"} alignItems={"center"} color={"black"} display={"flex"}>{current.data().licenseExpiry}</Grid>
                                </Grid>
                                <Grid item xs={2} paddingLeft={3}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} color={"navy"} display={"flex"}>
                                        <MdSpeed className={'me-1'} />
                                        {/*{t("Mileage")} (KM)*/}
                                    </Grid>
                                    <Grid  fontFamily={"fantasy"} justifyContent={"center"} alignItems={"center"} color={"black"} display={"flex"}>{current.data().mileage}</Grid>
                                </Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={12}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>Description:</Typography></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>



                <Dialog
                    style={{backgroundColor:'rgba(0, 0, 0, 0.5)',margin:"auto",display:"flex",alignItems:'center',justifyContent:"center"}}
                    open={open }
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle className={'p-5'} style={{fontFamily:'fantasy'}}>{"ARE YOU SURE YOU WANT TO DELETE THIS POST ?"}</DialogTitle>

                    <DialogContent>
                        <DialogContentText className={'d-flex align-item-center justify-content-center m-auto'} id="alert-dialog-slide-description">
                            <div className={'m-auto '}>
                                <Buttoon  onClick={handleClose}>CANCEL</Buttoon>
                                <Buttoon  onClick={Delete(TransitionLeft)}>DELETE</Buttoon>
                            </div>

                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>

                    </DialogActions>
                </Dialog>


                <Dialog
                    style={{backgroundColor:'rgba(0, 0, 0, 0.5)',margin:"auto",display:"flex",alignItems:'center',justifyContent:"center"}}
                    open={openUpdate }
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle className={'p-5'} style={{fontFamily:'fantasy'}}>{"UPDATE SECTION"}</DialogTitle>

                    <DialogContent>
                        <Grid container spacing={2} xs={12} >
                            <Grid item xs={12} p={1}>
                                <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                    <InputLabel id="vehicleModelID">Model</InputLabel>
                                    <Select labelId="vehicleModelID"
                                            value={current.data().companyMake}
                                            onChange={(e)=>{
                                                setCar({companyMake: e.target.value})
                                                console.log(Car.companyMake)
                                            }}>
                                        {/*<MenuItem value={current.data().companyMake}><em>{current.data().companyMake}</em></MenuItem>*/}
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
                                </FormControl>  </Grid>
                        </Grid>
                        <Grid container spacing={2} xs={12} >
                            <Grid item xs={6} p={1}>
                                <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                    <InputLabel  id="vehicleFuelID">Fuel</InputLabel>
                                    <Select labelId="vehicleFuelID"
                                            value={current.data().Fuel}
                                            onChange={(e)=>{
                                                setCar({Fuel: e.target.value})
                                                console.log(Car.Fuel)
                                            }}>
                                        {/*<MenuItem value={current.data().Fuel}><em>{current.data().Fuel}</em></MenuItem>*/}
                                        <MenuItem value={'Gasoline'}>Gasoline</MenuItem>
                                        <MenuItem value={'Diesel'}>Diesel</MenuItem>
                                        <MenuItem value={'Biodiesel'}>Biodiesel</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} p={1}>
                                <FormControl color={"warning"} size={"small"} variant="filled" sx={{ minWidth: '100%' }}>
                                    <InputLabel  id="vehicleGearID">Gear</InputLabel>
                                    <Select labelId="vehicleGearID"
                                            value={current.data().Gear}
                                            onChange={(e)=>{
                                                setCar({Gear: e.target.value})
                                                console.log(Car.Gear)
                                            }}>
                                        <MenuItem value={'Automatic'}>Automatic</MenuItem>
                                        <MenuItem value={'Manual'}>Manual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <Stack spacing={4} color={"warning"}>
                                        <DatePicker
                                            // minDate={dayjs(new Date(2000))}
                                            disableFuture
                                            // selected={ModelYear}
                                            views={['year']}
                                            dateFormat="yyyy"
                                            value={current.data().licenseExpiry}
                                            label="Year of release"
                                            onChange={(e)=>{
                                                setCar({licenseExpiry: dayjs(e).year().toString()})
                                                console.log(Car.licenseExpiry)
                                            }}
                                            renderInput={(params) =>
                                                <TextField size={"small"} variant={"filled"}
                                                           color={"warning"}
                                                           {...params} helperText={null} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth    variant="standard">
                                    <InputLabel  color={"warning"} htmlFor="vehiclePowerID">Power</InputLabel>
                                    <FilledInput size={"small"}
                                                 color={"warning"}
                                                 variant="standard"
                                                 id="vehiclePowerID"
                                                 defaultValue={current.data().power}
                                                 onChange={(e)=>{
                                                     setCar({power: e.target.value})
                                                     console.log(Car.power)
                                                 }}
                                                 endAdornment={<InputAdornment position="start">CC</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth  variant="standard">
                                    <InputLabel  color={"warning"} variant="standard" htmlFor="vehicleMileageID">Mileage</InputLabel>
                                    <FilledInput size={"small"}
                                                 color={"warning"}
                                                 variant="standard"
                                                 id="vehicleMileageID"
                                                 defaultValue={current.data().mileage}
                                                 onChange={(e)=>{
                                                     setCar({mileage: e.target.value})
                                                     console.log(Car.mileage)
                                                 }}
                                                 endAdornment={<InputAdornment position="start">KM</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField color={"warning"} fullWidth={'100%'} size={"small"}
                                           label='Body Color' variant="standard"
                                           defaultValue={current.data().bodyColor}
                                           onChange={(e)=>{
                                               setCar({bodyColor: e.target.value})
                                               console.log(Car.bodyColor)
                                           }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3} color={"warning"}>
                                        <DatePicker
                                            label="License Expiry Date"
                                            openTo="year"
                                            views={['year', 'month', 'day']}
                                            defaultValue={current.data().licenseExpiry}
                                            onChange={(newValue) => {
                                                setCar({licenseExpiry: dayjs(newValue).format('DD/MM/YYYY').toString()});
                                                console.log(Car.licenseExpiry)}}
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

                    </DialogContent>
                    <DialogActions>
                        <DialogContentText className={'d-flex align-item-center justify-content-center m-auto'} id="alert-dialog-slide-description">
                            عند الضغط على كبسه التعديل سيتم تغير كل المحتويات بناء عليها
                            <div className={'m-auto '}>
                                <Buttoon  onClick={handleClose}>CANCEL</Buttoon>
                                <Buttoon  onClick={Update(TransitionLeft)}>Update</Buttoon>
                            </div>
                    </DialogContentText>
                    </DialogActions>
                </Dialog>
            </>
        );

}





const Warrper =styled.div`
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 1000px;
    height: auto;
    width: 100rem;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: 0.9s opacity;
    //width: max-content;
    //display: inline-flex;
  }

  .slide {
    display: inline-block;
    //margin-top: -100px;
    //height: 220px;
    width: 100%;
    height: auto;
    //display: none;
    border-radius: 40px;
  }

  .active {
    display: none;
  }

  /* Buttons */

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #283885;
  }

  .slideshowDotactive {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #ffcc00;
  }
`


const Buttoon =styled.button`
  
    margin-top: 1rem;
    border: 0;
  margin-left: 1rem;
    text-decoration: none;
    //max-width: 50px;
    background-color: #18276c;
    color: rgb(255 255 255);
    padding: 0.5rem 1rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    width: auto;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
      padding: 0.5rem 1rem;
      background-color: #ffcc00;
      color: #18276c;
      font-weight: bolder;
      //box-shadow: 0 2rem 2rem 0 rgb(141, 160, 239);
      transform: scale(1);
      //border-radius: 20px;
    


  }
`

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grid direction="up" ref={ref} {...props} />;
});

