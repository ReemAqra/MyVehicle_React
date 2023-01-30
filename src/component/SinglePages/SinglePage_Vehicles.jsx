import React, {Component, useEffect,
    useState} from 'react';
import {useParams} from "react-router-dom";
import {useProductContext} from "../../context/ProductContext";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../FireDB";
import styled from "styled-components";
import PageNavigation from "./PageNavigation";
import ReactLoading from "react-loading";
import MyImage from "../Product/MyImage"
import {Container, Grid} from "@mui/material";
import {IoMdColorPalette } from "react-icons/io";
import { IoLocationSharp} from "react-icons/io5";
import {GoGear} from "react-icons/go";
import {AiFillInfoCircle } from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";
import {MdSpeed} from "react-icons/md";
import {RiChargingPileFill} from "react-icons/ri";
import {ImLocation ,ImPower} from "react-icons/im";
import {BsFillCalendarDateFill ,BsFillTelephoneFill} from "react-icons/bs";
import {BiCommentDetail} from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SinglePage_Vehicles() {
    const { t, i18n } = useTranslation();

    // const {getSingleProduct_acc , isSingleLoading, singleProduct} =useProductContext();
    const {id} =useParams();
    console.log("id=>",id)
    const [Single_Veh , setSingle_Veh]=React.useState({});
    const [Loading,setLoading]=useState(false)
    const [Loading_user,setLoading_user]=useState(false)
    const [imagesarr,setimagesarr]=useState([])
    const [activeimg,setactiveimge] = React.useState(null)
    const [index,setindex]=useState(0)

    const [userInfo,setuserInfo]=useState({})
    const get =async ()=>{
        setLoading(true)
        const querySnapshot = await getDoc(doc(db, "Vehicle",id));

        console.log("querySingleacss:",querySnapshot.data())
        setSingle_Veh( querySnapshot.data());

        setLoading(false)
        console.log("img:",querySnapshot.data().images)
        setimagesarr(imagesarr =>[...querySnapshot.data().images])
        console.log("imgarr:",imagesarr)
        console.log("Single_Veh.user=>",Single_Veh.user)

    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = async () => {
        setOpen(true);
        setLoading_user(true)

        const user = await getDoc(doc(db,"Users",Single_Veh.user))
        setuserInfo(user.data())
        console.log("user=>",userInfo)
        setLoading_user(false)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handletab=(index)=>{
        setindex(index)
        setactiveimge(imagesarr[index])
    }
    const handleactivetabs=(index)=>{
        if(imagesarr[index] ===activeimg){
            return 'active '
        }else {return 'imge'}
    }


    useEffect(()=>{
        get()
        // getSingleProduct_acc(`${id}`);

    },[]);

    return (<>
            {Loading ? <ReactLoading
                    className="m-auto justify-content-center p-2 mt-5 mb-4"
                    // type="spinningBubbles"
                    type={"bars"}
                    color="#b2c1cc"
                    height={317}
                    width={60}
                />  :
                <Warrper>
                    <PageNavigation  title={Single_Veh.companyMake}/>
                    <Container className={"container"}>
                        <div className={" grid row  container col-sm-12 "}>
                            {/*Product Image*/}
                            <Grid xs={6} container  className={"product_images  col-lg-6"}>
                                <Grid margin={"auto"} item xs={3}>
                                    {imagesarr.map((image ,index) => (
                                        <Box className={`Box`} sx={2} justifyContent={"center"} padding={1} margin={"auto"} alignItems={"center"} >
                                            {image != null ?
                                                <figure className={'align-items-center justify-content-center d-flex'}>
                                                    <img   className={handleactivetabs(index)} onClick={()=>{handletab(index)}} src={image} alt="" width="70" height='70'/>
                                                </figure> : null}
                                        </Box>
                                    ))}
                                </Grid>
                                <Grid item xs={9} borderRadius={1} bgcolor={'#d2d6e7'} borderColor={'#ffcc00'}  >
                                    <img className={'border p-2  border-2 w-100 '}border={1}  width={'100%'} height={'100%'}  src={imagesarr[index]}/>
                                </Grid>
                            </Grid>
                            {/*Product Data*/}
                            <div className={'product-data col-lg-6'}>
                                <Grid display={"-webkit-inline-box"} >
                                    <h2 className={'d-flex w-auto'}>{Single_Veh.companyMake}  </h2>
                                    <p className={'end-0 w-100 mb-0 opacity-75'}> {Single_Veh.Made}</p>
                                </Grid>

                                <p className={'w-100 h-auto mt-0  border  border-bottom-1 opacity-75'}></p>
                                <h5 style={{fontFamily:'fantasy'}}>{Single_Veh.price} ₪</h5>
                                <Grid  container  mb={1}  border={1} borderColor={'#ccc'} borderRadius={2} padding={1}>
                                    <Grid item xs={4}>
                                        <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}><RiChargingPileFill className={'me-1'} /> {t("Fuel")}</Grid>
                                        <Grid fontFamily={"fantasy"} justifyContent={"center"} alignItems={"center"} display={"flex"}>{Single_Veh.Fuel}</Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                                            <ImPower className={'me-1'}/> {t("power")}(cc)</Grid>
                                        <Grid  fontFamily={"fantasy"} justifyContent={"center"} alignItems={"center"} display={"flex"}>{Single_Veh.power} KW</Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                                            <GoGear className={'me-1'} />{t("Gear")}</Grid>
                                        <Grid  fontFamily={"fantasy"} justifyContent={"center"} alignItems={"center"} display={"flex"}>{Single_Veh.Gear}</Grid>
                                    </Grid>

                                </Grid>
                                <Grid  container  mb={1}  border={1} borderColor={'#ccc'} borderRadius={2} padding={1}>
                                    <Grid item xs={4}>
                                        <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                                            <IoMdColorPalette className={'me-1'} /> {t("Body Color")}</Grid>
                                        <Grid  fontFamily={"fantasy"} justifyContent={"center"} alignItems={"center"} display={"flex"}>{Single_Veh.bodyColor}</Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                                            <BsFillCalendarDateFill className={'me-1'}/> {t("license Expiry")}</Grid>
                                        <Grid  fontFamily={"fantasy"}  justifyContent={"center"} alignItems={"center"} display={"flex"}>{Single_Veh.licenseExpiry}</Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                                            <MdSpeed className={'me-1'} />{t("Mileage")} (KM)</Grid>
                                        <Grid  fontFamily={"fantasy"} justifyContent={"center"} alignItems={"center"} display={"flex"}>{Single_Veh.mileage}</Grid>
                                    </Grid>

                                </Grid>
                                <Grid display={"block"} container spacing={0}  width={'100%'} paddingLeft={2}  border={1} borderColor={'#ccc'} borderRadius={2}>
                                    <p style={{fontFamily:'fantasy'}}><BiCommentDetail /> {t("Description")}:</p>
                                    <p className={'grid'}>{Single_Veh.description}</p>
                                </Grid>
                                <Grid display={"-webkit-inline-box"} padding={1} width={"100%"}>
                                    {/*<p style={{fontFamily:'fantasy'}}><AiFillInfoCircle className={'me-1'} />contact information :</p>*/}

                                    <Grid  height={'-webkit-fill-available'} marginLeft={3} width={'100%'} justifyContent={"center"} display={"flex"} alignItems={"center"} padding={1}>
                                        <div className={'m-auto'} style={{height:'-webkit-fill-available'}}>
                                            <Button variant="outlined" color={"warning"} onClick={handleClickOpen}>
                                                <AiFillInfoCircle className={'me-1'} />{t("contact information")}
                                            </Button>
                                            <Dialog
                                                style={{height:'-webkit-fill-available'}}
                                                open={open}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={handleClose}
                                                aria-describedby="alert-dialog-slide-description"
                                            >
                                                <DialogTitle>{t("User Information:")}</DialogTitle>
                                                {Loading_user ? <ReactLoading
                                                    className="m-auto justify-content-center p-2 mt-5 mb-4"
                                                    type="spinningBubbles"
                                                    // type={"bars"}
                                                    color="#b2c1cc"
                                                    height={80}
                                                    width={60}
                                                /> :
                                                <DialogContent>
                                                    <DialogContentText className={'m-auto'} id="alert-dialog-slide-description">
                                                        <p style={{fontSize:'13px',}}><FaUserAlt color={'#ffcc00'} className={'me-3 opacity-50 '}/>{userInfo.username}</p>
                                                        <p style={{fontSize:'13px',}}><HiOutlineMail color={'#ffcc00'} className={'me-3 opacity-50 '}/>{userInfo.email}</p>
                                                        <p style={{fontSize:'13px',}}><BsFillTelephoneFill color={'#ffcc00'} className={'me-3 opacity-50 '}/>{userInfo.phoneNumber}</p>
                                                        <p style={{fontSize:'13px',}}><IoLocationSharp color={'#ffcc00'} className={'me-3 opacity-50 '}/>{userInfo.location}</p>
                                                    </DialogContentText>
                                                </DialogContent>
                                                }
                                                <DialogActions>
                                                    <Button color={"warning"} onClick={handleClose}>Done</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    </Grid>
                                </Grid>
                    {/*    /!*        <Grid border={1} width={'100%'} padding={2} mt={2} borderColor={'#ccc'} borderRadius={2} >*!/*/}
                    {/*    /!*            <p>Posted By: {singuleAcc.email}</p>*!/*/}
                    {/*    /!*        </Grid>*!/*/}

                            </div>


                        </div>
                    </Container>

                </Warrper>

            }

        </>
    );

}
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grid direction="up" ref={ref} {...props} />;
});
const Warrper =styled.section`
.container{
  padding: 1rem 0;
  //row-gap: normal;
}
  .product-data{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    //gap: 2rem;
    
    .product-data-warranly{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      
      
    }
  }
`

