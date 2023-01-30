import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
import {BsBookmarkHeartFill ,BsBookmarkHeart} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import {CiSquareQuestion} from "react-icons/ci";
import Button from "@mui/material/Button";


export default function Navbar() {
    const { t, i18n } = useTranslation();

    const [clicked,setclicked]=useState(false)
    const { user,logout } =UseAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const Navigate =useNavigate();

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
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
            <header className=" w-100   _header " style={{zIndex:'100000'}}>
                <div className="navbar navbar-expand-md ">
                    <Link className="navbar-brand text-white ms-3 p-2 _header_logo" to="/">MyVehicle</Link>
                    <nav  className="container-fluid  navbar-expand-md _header_content">
                        <div className="_header_contant_item container-fluid   m-0">
                            {/* Menu */}
                            <motion.ul className={clicked ? "nav  active" : "nav "}>
                                {/*<motion.li*/}
                                {/*    whileHover={{ scale: 0.9 }}*/}
                                {/*    whileTap={{ scale: 1.1 }}*/}
                                {/*    className="nav-item text-uppercase  m-1 fs-6 ">*/}
                                {/*    <Link className="nav-link text-white" to="Home">HOME</Link>*/}
                                {/*</motion.li>*/}
                                {/*<motion.li*/}
                                {/*    whileHover={{ scale: 0.9 }}*/}
                                {/*    whileTap={{ scale: 1.1 }}*/}
                                {/*    className="nav-item text-uppercase m-1 fs-6 ">*/}
                                {/*    <Link className="nav-link text-white" to="Product">Product</Link>*/}
                                {/*</motion.li>*/}

                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1 fs-6 ">
                                    <Link className="nav-link text-white" to="Product">FOR SALE</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1  fs-6">
                                    <Link className="nav-link text-white" to='sellNow'>sell now</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1  fs-6">
                                    <Link className="nav-link text-white" to='Part-Cars'>Part cars</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="nav-item text-uppercase m-1  fs-6">
                                    <Link className="nav-link text-white" to='about'>about us</Link>
                                </motion.li>
                            </motion.ul>

                        </div>
                        {!user ?<>

                                <Button className={' h-auto fs-4  p-0'}><i className={'text-white '}><CiSquareQuestion className={'fa-bold'}/></i></Button>
                                <Button className={' h-auto fs-5  p-0'}><i className={'text-white '}><BsBookmarkHeart className={'fa-bold'}/></i></Button>

                            { i18n.language == 'en' && <Button className={'text-white fa-fantasy'} onClick={()=>{i18n.changeLanguage('ar')}}>AR</Button>}
                            {i18n.language == 'ar' &&  <Button className={'text-white'}  onClick={()=>{i18n.changeLanguage('en')}}>EN</Button>}

                            <div className={clicked ? "_header_contant_btndiv active" : "_header_contant_btndiv"}>
                                <Link className="_header_content_btn  border border-1 ps-2 pe-2 p-1  me-3" to="Signup">SIGNIN</Link>
                            </div></>
                            :
                            <>

                                <Button className={' h-auto fs-4  p-0'}><i className={'text-white '}><CiSquareQuestion className={'fa-bold'}/></i></Button>
                                <Button className={' h-auto fs-5  p-0'}><i className={'text-white '}><BsBookmarkHeart className={'fa-bold'}/></i></Button>
                            { i18n.language == 'en' && <Button className={'text-white'}  onClick={()=>{i18n.changeLanguage('ar')}}>AR</Button>}
                                {i18n.language == 'ar' &&  <Button className={'text-white'}  onClick={()=>{i18n.changeLanguage('en')}}>EN</Button>}


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

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));