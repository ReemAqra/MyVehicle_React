import React, { useEffect, useState } from 'react';
import {UseAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import logo from './../IMG/logo2.png'
import {AnimatePresence, motion} from "framer-motion";
import ImageUploading from "react-images-uploading";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddVehicles from "./addVehicles";
import AddAccessories from "./addAccessories";
import MyPost_acc from "./MyPost_acc";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./account.Model.css";
import {Grid} from "@mui/material";
import MyPost_V from "./MyPost_V";
import {useTranslation} from "react-i18next";
import SAVED_CARS from "./SAVED_CARS";
import SAVED_PARTS from "./SAVED_PARTS"

export default function Account (){
    const { t, i18n } = useTranslation();

    const [value, setValue] = React.useState(0);
    const [visible_Vehicle, setvisible_Vehicle] = useState(false)
    const [visible_acc, setvisible_acc] = useState(false)

    const {user,logout}=UseAuth();
    const [userdata,setuserdata]=useState('')
    const Navigate =useNavigate();
    const emaill = user.email
    const [activetab, setactivetab] = useState(null);

    const allIngredients = [
        { icon: "🚘", label: t("New Vehicle ad") ,contact: <AddVehicles  /> },
        { icon: "⚙️️", label: t("New Accessories ad"),contact: <AddAccessories email={emaill} uid={user.uid} />},
    ];
    const allIngredients_F = [
        { icon: "❤  ", label: " Cars 🚘" ,contact: <SAVED_CARS /> },
        { icon: "❤  ", label: " PartCars ⚙",contact: <SAVED_PARTS />},
    ];
    const allIngredients_M = [
        { icon: " ", label: "My Vehicle " ,contact: <MyPost_V email={emaill} /> },
        { icon: " ", label: "My accessories ",contact: <MyPost_acc email={emaill} />},
    ];
    const [tomato, lettuce] = allIngredients;
    const [Accessories, vehicle] = allIngredients_F;
    const [psstAccessories, postvehicle] = allIngredients_M;
    const initialTabs_F = [Accessories, vehicle];
    const initialTabs = [tomato, lettuce];
    const initialTabs_M = [psstAccessories, postvehicle];

    const [selectedTab, setSelectedTab] = useState(initialTabs[0]);
    const [selectedTab_f, setSelectedTab_f] = useState(initialTabs_F[0]);
    const [selectedTab_M, setSelectedTab_M] = useState(initialTabs_M[0]);



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
    const maxNumber = 5;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const activeselectedtab=(item)=>{
        if(item === selectedTab){
            return ' selected liadd'
        }else {
            return 'selected liadd'
        }
    }

    return (
        <>
            <Grid  className='  row  justify-content-end vh-100  '
                   maxHeight style={{background :'#a7adcc'}}>
                <div className='  col-md-3 pt-2 ps-2  top-0' style={{background :'#18276c',overflow:'hidden'}}>
                    {/*<div className=' shadow  container text-center bg-white' style={{width:'90%'}}>*/}
                    {/*    <div className="card-header  container border-0 bg-white p-3">*/}
                    {/*        <i className="fs-1 p-2" style={{color :'#283885'}}><IoPersonCircleOutline /></i>*/}
                    {/*    </div>*/}
                    {/*    <div className="card-body rounded-0 container border-0 justify-content-start d-grid">*/}
                    {/*        <p className='fs-5 text-start'><i className="me-3 fs-5" style={{color: "#1e2c6b"}}><IoMail /></i>{user && user.email}</p>*/}
                    {/*        /!*<p className='fs-5 text-start'><i className="me-3 fs-5" style={{color: "#4d636f"}}><IoLocationSharp /></i>{ userdata.loaction}</p>*!/*/}
                    {/*        /!*<p className='fs-5 text-start '><i className="me-3 fs-5" style={{color: "#4d636f"}}><AiFillPhone /></i>  {JSON.stringify(userdata.phone )}</p>*!/*/}
                    {/*    </div>*/}
                    {/*    <button className='mb-4 w-100 border-0 bg-warning  text-center d-flex justify-content-center' onClick={handleLogout} >Log out</button>*/}
                    {/*</div>*/}

                    <div className={'w-100'}>
                        <img src={logo} width={'100%'}/>

                    </div>
                    <div className='card  mt-5  container border-0 ' style={{background :'#18276c'}}>
                        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: 'divider' }}>
                            <Tab className={'fa-white'}  style={{color:'white',fontFamily:'fantasy'}}  label={t("⚙  Cars")} {...a11yProps(0)} />

                            <Tab className={'fa-white'} style={{color:'white',fontFamily:'fantasy'}} label={t("⚙  Parts Cars ")} {...a11yProps(1)} />
                            <Tab className={'fa-white'}  style={{color:'white',fontFamily:'fantasy'}}  label={t("⚙  Saved")} {...a11yProps(2)} />
                        </Tabs>
                    </div>

                </div>
                <div className= 'mt-2 col-md-9 d-flex justify-content-center ps-2 p-2' >
                    <div className='card shadow' style={{width:'95%'}}>
                        <TabPanel value={value} index={1}>
                            <MyPost_acc email={emaill} />
                        </TabPanel>
                        <TabPanel value={value} index={0}>
                            <MyPost_V email={emaill} />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <div className="window">
                                <nav className={"navadd"}>
                                    <ul className={"uladd"}>
                                        {initialTabs.map((item) => (
                                            <li
                                                key={item.label}
                                                className={activeselectedtab(item)}
                                                // className={item === selectedTab ? `liadd selected ` : `liadd selected `}
                                                onClick={() => {
                                                    setSelectedTab(item)
                                                    setactivetab(item)
                                                }}
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
                                            {selectedTab_f ? selectedTab_f.contact : "😋"}
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
            </Grid>
        </>
    );
}

