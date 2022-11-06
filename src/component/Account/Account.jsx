import React, { useEffect, useState } from 'react';
import {UseAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {motion} from "framer-motion";

import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoLocationSharp ,IoMail } from 'react-icons/io5';
import { AiFillPhone } from 'react-icons/ai';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddVehicles from "./addVehicles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Stepper } from 'react-form-stepper';
import ImageUploading from "react-images-uploading";
import {CCard ,CButton, CCardBody, CCollapse} from "@coreui/react";
import {ButtonGroup} from "@mui/material";

export default function Account (){
    const [value, setValue] = React.useState(0);
    const [visible, setVisible] = useState(false)
    const [visible_Vehicle, setvisible_Vehicle] = useState(false)
    const [visible_acc, setvisible_acc] = useState(false)

    const {user,logout}=UseAuth();
    const [userdata,setuserdata]=useState('')
    const Navigate =useNavigate();
    const emaill = user.email

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    useEffect (()=>{
    axios.get(`http://localhost:3000/users/${emaill}`
    ).then((response) => {
        console.log(response.data) 
        setuserdata(response.data[0])
    })
    .catch((error) => console.log(error));
    },[])
    console.log(userdata)

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleLogout =async ()=>{
        try {
            await logout()
            Navigate('./../login')
            console.log('You are logged out')
        }catch (e){
            console.log(e.message)
        }
    }

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <div className='p-4 row pt-3 justify-content-center bg-secondary bg-opacity-10'>
                <div className='col-md-4 pt-3 ps-5   '>
                    <div className='card shadow rounded-0 container border-0 text-center'>
                        <div className="card-header bg-white">
                            <i className="fs-1 p-2" style={{color :'#3e5a6e'}}><IoPersonCircleOutline /></i>
                        </div>
                     <div className="card-body justify-content-start d-grid">
                         <p className='fs-5 text-start'><i className="me-3 fs-5" style={{color: "#4d636f"}}><IoMail /></i>{user && user.email}</p>
                         <p className='fs-5 text-start'><i className="me-3 fs-5" style={{color: "#4d636f"}}><IoLocationSharp /></i>{ userdata.loaction}</p>
                         <p className='fs-5 text-start '><i className="me-3 fs-5" style={{color: "#4d636f"}}><AiFillPhone /></i>  {JSON.stringify(userdata.phone )}</p>
                     </div>

                     <button className='mb-4 border-0 bg-warning  text-center d-flex justify-content-center' onClick={handleLogout} >Log out</button>
                 </div>
                 <div className='card mt-3 shadow rounded-0 container border-0 text-center's>
                     <Tabs
                         orientation="vertical"
                         variant="scrollable"
                         value={value}
                         onChange={handleChange}
                         aria-label="Vertical tabs example"
                         sx={{ borderRight: 1, borderColor: 'divider' }}
                     >
                         <Tab label="My Ads" {...a11yProps(0)} />
                         <Tab label="add an Ad" {...a11yProps(1)} />
                         <Tab label="My Favorite" {...a11yProps(2)} />

                     </Tabs>
                 </div>
               </div>
                <div className='col-md-8 pt-3 ps-5 '>
                    <div className='card shadow'>
                        <TabPanel value={value} index={0}>
                            <AddVehicles />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div style={{fontFamily:'fantasy', textDecorationColor:'#3e5a6e'}}   className='justify-content-center d-flex p-3  '>
                                <motion.button
                                    style={{color:'#1c2531'}}
                                    className=' w-50 pt-2 pe-5  border-0'
                                    whileHover ={{scale:1.01}}
                                    whileTap={{scale:0.9}}
                                    onClick={(event) => {
                                    event.preventDefault()
                                    setvisible_Vehicle(!visible_Vehicle)
                                        setvisible_acc(visible_Vehicle)
                                }}>Vehicles</motion.button>
                                <motion.button
                                    className='border-0 pt-2 pe-5 w-50 border-raduis-4 '
                                    whileHover ={{scale:1.01}}
                                    whileTap={{scale:0.9}}
                                    onClick={() => {
                                        setvisible_acc(!visible_acc)
                                        setvisible_Vehicle(visible_acc)
                                    }
                                }>accessories</motion.button>

                            </div>

                                <CCollapse visible={visible_Vehicle} className='card p-3'>
                                    <AddVehicles />
                                </CCollapse>
                                <CCollapse visible={visible_acc} className='card p-3'>
                                    <Typography
                                        fontSize='40px'
                                        color= '#3e5a6e'
                                        align="center"
                                        variant= "h6"
                                        fontFamily='fantasy'>
                                        New accessories ad
                                    </Typography>
                                </CCollapse>

                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <Box className="App">
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
                        </TabPanel>

                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                    </div>
                </div>
            </div>
        </>
    );
}

