import React, { useState} from 'react';
import {ButtonGroup, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { AiOutlineQrcode } from 'react-icons/ai';
import { GiWeight } from 'react-icons/gi';
import { ImLocation } from 'react-icons/im';
import styled from "styled-components";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {IoPricetagsSharp} from "react-icons/io5";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {useTranslation} from "react-i18next";
export default function  MyAcc (Props){
const  blog =Props.blog
    const [images]=useState([]);
    images.pop();
    images.pop();
    images.pop();
    images.push([blog.data().images[0]])

if(blog.data().images[1] !== null){
    images.push(blog.data().images[1])
}if(blog.data().images[2] !== null){
        images.push(blog.data().images[2])

}
    const [activeimg,setactiveimge] = React.useState(null)
    const { t, i18n } = useTranslation();
    const [index, setIndex] = React.useState(0);
    const delay = 20000;
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay);
return()=>{}
    }, [index])

    const handleClickOpen = async () => {
        setOpen(true);

    };
    return (
            <>
                <Grid style= {{padding: '21px', marginRight: '-37px',}}>

                    <Grid mt={2} border={2} borderRadius={2} borderColor={"#b2c1cc"} marginRight={5}   container maxWidth spacing={2}>
                        <Box borderRadius={2} style={{background:"#f2f2f8"}}  sx={{
                            display: 'flex', '& > *': {m: 'auto',padding:'0', width: '100%',height: '100%',},}}  item xs={12} sm={2}>
                            <ButtonGroup orientation="vertical" aria-label="large vertical outlined button group " variant="text">
                                <Button   style={{height:'50%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} key="one">update </Button>
                                <Button onClick={handleClickOpen}  style={{height:'50%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} key="two">Delete </Button>
                                {/*<Button  style={{height:'33%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} key="three">Three </Button>*/}
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
                                    <Grid item xs={6}>
                                        <Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>PartNam:</Typography>
                                    </Grid>
                                    <Grid item xs={6}><Typography>{blog.data().partName}</Typography></Grid>
                                </Grid>
                            <Grid  container mt={1} mb={1}  border={1} borderColor={'#ccc'} borderRadius={2} padding={2}>
                                <Grid item xs={3}>
                                    <Grid className={'opacity-50 mb-1'} style={{fontFamily:'fantasy'}} color={"navy"} justifyContent={"center"} alignItems={"center"} display={"flex"}><GiWeight className={'me-1'} /> {t("Weight")}</Grid>
                                    <Grid  justifyContent={"center"} alignItems={"center"} display={"flex"}>{blog.data().weight}</Grid>
                                </Grid>
                                <Grid item xs={2}>
                                    <Grid className={'opacity-50 mb-1'} style={{fontFamily:'fantasy'}} color={"navy"} justifyContent={"center"} alignItems={"center"} display={"flex"}><AiOutlineQrcode className={'me-1'}/> {t("Code")}</Grid>
                                    <Grid  justifyContent={"center"} alignItems={"center"} display={"flex"}>{blog.data().code}</Grid>
                                </Grid>
                                <Grid item xs={2}>
                                    <Grid className={'opacity-50 mb-1'} style={{fontFamily:'fantasy'}} color={"navy"} justifyContent={"center"} alignItems={"center"} display={"flex"}><ImLocation className={'me-1'} />{t("Location")}</Grid>
                                    <Grid justifyContent={"center"} alignItems={"center"} display={"flex"}>{blog.data().Location}</Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid className={'opacity-50 mb-1'} style={{fontFamily:'fantasy'}} color={"navy"} justifyContent={"center"} alignItems={"center"} display={"flex"}><IoPricetagsSharp className={'me-1'} />{t("Price")}</Grid>
                                    <Grid justifyContent={"center"} alignItems={"center"} display={"flex"}>{blog.data().price}</Grid>
                                </Grid>
                                <Grid item xs={2}>
                                    <Grid className={'opacity-50 mb-1'} style={{fontFamily:'fantasy'}} color={"navy"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                                        {/*<IoPricetagsSharp className={'me-1'} />*/}
                                        {t("car Type")}</Grid>
                                    <Grid justifyContent={"center"} alignItems={"center"} display={"flex"}>{blog.data().carType}</Grid>
                                </Grid>

                            </Grid>
                                <Grid container maxWidth spacing={2} xs={12}>
                                    <Grid item xs={12}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>Description:</Typography></Grid>
                                    <Grid item xs={12}><Typography>{blog.data().Description} </Typography></Grid>
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
                                    <Buttoon color={"warning"}  onClick={handleClose}>CANCEL</Buttoon>
                                    <Buttoon color={"warning"} onClick={handleClose}>DELETE</Buttoon>
                                </div>

                            </DialogContentText>
                        </DialogContent>

                    <DialogActions>

                    </DialogActions>
                </Dialog>
            </>
        );

}

;
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
