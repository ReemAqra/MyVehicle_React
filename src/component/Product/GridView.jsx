import React, {Component, useState} from 'react';
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import search from './empty_search.png'
import {MdOutlineAddCircle,MdOutlinePostAdd} from "react-icons/md"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ReactLoading from "react-loading";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {collection, doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../../FireDB";
import {Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import {useTranslation} from "react-i18next";
import {UseAuth} from "../../context/AuthContext";
import {useFilterContext} from "../../context/FilterContext";
export default function GridView({product }) {
    console.log("product:",product.length)
    const [open, setOpen] = React.useState(false);
    const { t, i18n } = useTranslation();
    const {user,logout}=UseAuth();
    const {filters:{ company,locations,fuel}} = useFilterContext();
    const [Loading,setLoading]=useState(false)

    const handleClickOpen = async () => {
        setOpen(true);

    };
    const handleRequest = async () => {
        setLoading(true)
        await setDoc(doc(collection(db, "Request")), {
            user:user.uid,
            company: company,
            locations:locations,
            fuel:fuel,
        })
        setLoading(false)
        setOpen(false)
    };

    const handleClose = () => {
        setOpen(false);
    };

    if(product.length === 0)return (<>

            <div className={'w-100 align-items-center justify-content-center d-flex'}>
                <img width={'20%'} src={search}/>
            </div>
            <div className={"w-100 text-center align-items-center justify-content-center d-flex"}>
                <p className={'p-3 fs-5 fst-italic opacity-75 w-100'}>Your search does not match any results. Please refine your search or Post an Ad of what your are looking for.</p>
            </div>
            <div className={"w-100 align-items-center justify-content-center d-flex"}>
                <Button onClick={handleClickOpen}>
                    <MdOutlineAddCircle className={'me-2 m-auto'} />

                    {/*<Link style={{textDecoration:'none'}} className="text-white" to="./../../Signup">Post Your Ad request</Link>*/}
                    Post Your Ad request
                    </Button>

                <Dialog
                    style={{height:'-webkit-fill-available'}}
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    maxWidth={'100rem'}
                    className={'w-100'}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle className={'ms-5 fs-2 me-5 p-5'} style={{fontFamily:'fantasy'}}
                    ><MdOutlinePostAdd className={'me-3'} />{t("Post Your Ad request")}</DialogTitle>

                    {!user ?   <>
                        <DialogContent className={'justify-content-center align-items-center d-grid'}>
                            <p>Login OR Sign Up So You can Request</p>
                            <Button>
                                <Link style={{textDecoration:'none'}}
                                      className="text-white" to="./../../Signup">SIGN UP FOR FREE</Link>

                            </Button>
                        </DialogContent>
                            <DialogActions>
                                <Button color={"warning"} onClick={handleClose}>Cancel</Button>
                            </DialogActions>
                    </>
                        : <>{!Loading ? <> <DialogContent>
                            <TextField className={'p-2'} id="Company" label="Company"
                            defaultValue={company}
                            InputProps={{readOnly: true,}}
                            size="small" variant="filled" color={'warning'}/>
                            <TextField  className={'p-2'} id="Location" label="Location"
                            defaultValue={locations}
                            InputProps={{readOnly: true,}}
                            size="small" variant="filled" color={'warning'}/>
                            <TextField  className={'p-2'} id="fuel" label="Fuel"
                            defaultValue={fuel}
                            InputProps={{readOnly: true,}}
                            size="small" variant="filled" color={'warning'}/>

                            </DialogContent> </> : <><ReactLoading
                            className="m-auto justify-content-center p-2 mt-5 mb-1"
                            // type="spinningBubbles"
                            type={"bars"}
                            color="#b2c1cc"
                            height={317}
                            width={60}
                        /></>}


                            <DialogActions>
                                <Button color={"warning"} onClick={handleRequest}>Request</Button>
                                <Button color={"warning"} onClick={handleClose}>Cancel</Button>
                            </DialogActions>
                    </>
                    }

                </Dialog>
            </div></>
       )
        return (
           <Wrapper>
               <div className={"container grid"}>
                   <div className={'w-100 row'}>
                   {product.map((current,index)=>{
                       // console.log(current.data())
                       return(
                           // <div>hi</div>
                           <div className={'col-sm-12 col-md-6 col-lg-3 mb-4'}>
                               <NavLink className={'text-decoration-none'}  to={`./../SinglePage_Vehicles/${current.id}`}>
                                   <div className={'card'}>
                                       <figure>
                                           <img width={100} src={current.data().images[0]}/>
                                           <figcaption className={'caprion'}>{current.data().companyMake}</figcaption>
                                       </figure>
                                       <div className={"card-data"}>
                                           <div className={"card-data-flex"}>
                                               <h3 className={'text-decoration-none'}>{current.data().Made}</h3>
                                               <p className={"card-data--price"}>{current.data().price} ₪</p>
                                           </div>
                                       </div>
                                   </div>
                               </NavLink>
                           </div>
                       )

                   })}
                   </div>
               </div>
           </Wrapper>
        );

}
const Wrapper =styled.section`
  padding: 1rem 0;
  height: auto;

  .container {
    max-width: 200rem;
  }

  .grid {
    gap: 1rem;
  }

  figure {
    padding: 0.1rem;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      //background-color: #dcd214;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.1s linear;
      cursor: pointer;
      //z-index: 10;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.1);
    }

    img {
      max-width: 100%;
      width: 95%;
      margin-top: 0.5rem;
      height: 10rem;
      transition: all 0.1s linear;
    }
    .caprion {
      position: absolute;
      top: 10%;
      right: 10%;
      text-transform: uppercase;
      background-color: #fcfcfc;
      padding: 0.6rem 1rem;
      font-size: 0.8rem;
      border-radius: 0.3rem;
    }
  }


  .card {
    background-color: #f5f6fc;
    border-radius: 0.4rem;

    .card-data {
      padding: 0 0.8rem;
      height: 30px;

    }

    .card-data-flex {
      //margin: 0rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //background-color: #18276c;
      margin-right: -4px;
      margin-top: -17px;
    }

    h3 {
      text-decoration: none;
      color: #1c2531;
      text-transform: capitalize;
      font-size: 1.3rem;
      //color: #dcd214;
    }

    .card-data--price {
      text-decoration: none;
    !important;
      text-underline-color: #eaedf8;
      color: #1c2531;
      opacity: 50%
    }

    .btn {
      margin: 1rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background-color: rgb(255, 204, 0);
    }

    &:hover a {
      color: #ffffff;
    }

    a {
      color: rgb(208, 31, 31);
      font-size: 1.4rem;
    }
  }
`
const Button =styled.button`
  
    margin-top: 1rem;
    border: 0;
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