import React, { useEffect, useState } from 'react';
import {UseAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoLocationSharp ,IoMail } from 'react-icons/io5';
import { AiFillPhone } from 'react-icons/ai';
import {AnimatePresence, motion} from "framer-motion";
import ImageUploading from "react-images-uploading";
import { CCollapse} from "@coreui/react";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddVehicles from "./addVehicles";
import AddAccessories from "./addAccessories";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./account.Model.css";

export default function Account (){
    const [value, setValue] = React.useState(0);
    const [visible_Vehicle, setvisible_Vehicle] = useState(false)
    const [visible_acc, setvisible_acc] = useState(false)

    const {user,logout}=UseAuth();
    const [userdata,setuserdata]=useState('')
    const Navigate =useNavigate();
    const emaill = user.email

     const allIngredients = [
        { icon: "🚘", label: "New Vehicle ad" ,contact: <AddVehicles /> },
        { icon: "⚙️️", label: "New accessories ad",contact: <AddAccessories />},
    ];
    const [tomato, lettuce] = allIngredients;
    const initialTabs = [tomato, lettuce];
    const [selectedTab, setSelectedTab] = useState(initialTabs[0]);


    const allIngredients_F = [
        { icon: "❤  ", label: " Vehicle " ,contact: <AddVehicles /> },
        { icon: "❤  ", label: " accessories ",contact: <AddAccessories />},
    ];
    const [Accessories, vehicle] = allIngredients_F;
    const initialTabs_F = [Accessories, vehicle];
    const [selectedTab_f, setSelectedTab_f] = useState(initialTabs_F[0]);



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
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <div className='p-4 row pt-3 justify-content-center bg-secondary bg-opacity-10'>
                <div className='col-md-4 pt-3 ps-5 '>
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
                        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: 'divider' }}>
                            <Tab label="My Ads" {...a11yProps(0)} />
                            <Tab label="add an Ad" {...a11yProps(1)} />
                            <Tab label="My Favorite" {...a11yProps(2)} />
                        </Tabs>
                    </div>
                </div>
                <div className='col-md-8  ps-5 '>
                    <div className='card shadow'>
                        <TabPanel value={value} index={0}>
                            My Post
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="window">
                                <nav className={"navadd"}>
                                    <ul className={"uladd"}>
                                        {initialTabs.map((item) => (
                                            <li
                                                key={item.label}
                                                className={item === selectedTab ? `liadd selected ` : `liadd selected `}
                                                onClick={() => setSelectedTab(item)}
                                            >
                                                {`${item.icon} ${item.label}`}
                                                {item === selectedTab ? (
                                                    <motion.div className="underline" layoutId="underline" />
                                                ) : null}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <main>
                                    <AnimatePresence exitBeforeEnter>
                                        <motion.div key={selectedTab ? selectedTab.label : "empty"}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                        >
                                            {selectedTab ? selectedTab.contact : "😋"}
                                        </motion.div>
                                    </AnimatePresence>
                                </main>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="window">
                                <nav className={"navadd"}>
                                    <ul className={"uladd"}>
                                        {initialTabs_F.map((item) => (
                                            <li
                                                key={item.label}
                                                className={item === selectedTab_f ? `liadd selected ` : `liadd selected `}
                                                onClick={() => setSelectedTab_f(item)}
                                            >
                                                {`${item.icon} ${item.label}`}
                                                {item === selectedTab_f ? (
                                                    <motion.div className="underline" layoutId="underline" />
                                                ) : null}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <main>
                                    <AnimatePresence exitBeforeEnter>
                                        <motion.div key={selectedTab_f ? selectedTab_f.label : "empty"}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                        >
                                            {selectedTab_f ? selectedTab_f.icon : "😋"}
                                        </motion.div>
                                    </AnimatePresence>
                                </main>
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four

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
                    </div>
                </div>
            </div>
        </>
    );
}

