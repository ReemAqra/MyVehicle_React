import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import style_Navbar from "./navbar.css"
import {motion } from 'framer-motion'
import {UseAuth} from "../../context/AuthContext";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import {BiLogOutCircle} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";


export default function Navbar() {
const [clicked,setclicked]=useState(false)
    const { user,logout } =UseAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const Navigate =useNavigate();

    const open = Boolean(anchorEl);

    function handleClick (){
        setclicked(!clicked)
    }
    const handleClickm = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout =async ()=>{
        try {
            await logout()
            Navigate('./../')
            console.log('You are logged out')

        }catch (e){
            console.log(e.message)
        }
    }

    return (
        <>
            <header className=" w-100   _header ">
                <div className="navbar navbar-expand-md ">
                    <Link className="navbar-brand text-white ms-3 p-2 _header_logo" to="/">MyVehicle</Link>
                    <nav  className="container-fluid  navbar-expand-md _header_content">
                        <div className="_header_contant_item container-fluid   justify-content-center m-0">
                            {/* Menu */}
                            <motion.ul className={clicked ? "nav justify-content-centers active" : "nav justify-content-center"}>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase  m-1 fs-5 ">
                                    <Link className="nav-link text-white" to="Home">HOME</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1 fs-5 ">
                                    <Link className="nav-link text-white" to="Product">Product</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1  fs-5">
                                    <Link className="nav-link text-white" to='about'>about</Link>
                                </motion.li>
                            </motion.ul>
                        </div>
                        {!user ?
                        <div className={clicked ? "_header_contant_btndiv active" : "_header_contant_btndiv"}>
                            <Link
                                className="_header_content_btn  border border-1 ps-2 pe-2 p-1  me-3" to="Signup">SIGNIN
                            </Link>
                        </div>
                            :
                            <>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClickm}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}>
                                            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            p: 3,
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 35,
                                                height: 35,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <MenuItem>
                                        <Avatar />
                                        <Link
                                            className=" border-1 ps-2 pe-2 p-1  me-3" to="Account">Account
                                        </Link>
                                    </MenuItem>
                                    <Divider />

                                    <MenuItem>
                                        <ListItemIcon>
                                            <AiOutlineSetting />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <BiLogOutCircle />
                                        </ListItemIcon>
                                        <button className='border-0  bg-white' onClick={handleLogout} >Log out</button>

                                    </MenuItem>
                                </Menu>

                            </>

                        }
                    </nav>
                    {/* SMALL SCREEN */}
                    <motion.button
                        whileHover ={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        onClick={handleClickm}
                        className="_header_toggle end-0 text-white  text-black  me-2  p-2 border-0 "
                        style={{background:"inherit" }} type="button" >
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </motion.button>
                </div>
            </header>
        </>

    );


}

