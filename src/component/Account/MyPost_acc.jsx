import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {query,getDoc,where,collection ,getDocs,setDoc,doc} from 'firebase/firestore'
import { AiOutlineQrcode } from 'react-icons/ai';
import { ImPriceTag } from 'react-icons/im';
import { GiWeight } from 'react-icons/gi';
import { ImLocation } from 'react-icons/im';
import { Slide } from 'react-slideshow-image'
import { wrap } from "popmotion";
import "./MyPost_acc.Module.scss"
import {auth,storage ,db} from "../../FireDB";
import {ButtonGroup, Grid, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactLoading from "react-loading";
import Divider from "@mui/material/Divider";
import {styled} from "@mui/styles";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {getDownloadURL,ref, getStorage} from "firebase/storage";
import {AnimatePresence ,motion } from "framer-motion";

export default   function  MyPost_acc  (Props) {
    console.log("donffe")
    const [querySnapshot,setquerySnapshot]=React.useState([])
    const [Loading, setLoading]=React.useState(undefined);
    const email = Props.email

    const fun = async (querySnapshot)=>{
       // const querySnapshot= await getDocs(collection(db, "userInfo"));
       //  console.log(querySnapshot)
       //  querySnapshot.forEach((doc) => {
       //      setarray(doc);
       //      console.log(doc.id, " => ", doc.data());
       //      console.log(doc.data())
       //  });
       //  const q = query(collection(db, "cities"), where("capital", "==", true));
        setquerySnapshot([]);
        querySnapshot = await getDocs(query(collection(db, "accessories"), where("email", "==", email))

        );
        querySnapshot.docs.forEach((doc) => {
           setquerySnapshot(querySnapshot =>[...querySnapshot,doc.data()])
            console.log("accessories = ",querySnapshot)
            setLoading(true)
        })

        // const docRef = doc(db, "userInfo",
        //     "21jPN4P8TRMkKztxQjcGZwbxBlt1");
        // const docSnap = await getDoc(docRef);
        //
        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }

        // const storage = getStorage();
        getDownloadURL(ref(storage, 'imagesAccessories/23776eb85773613a53d5e301affe91ff.jpg'))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                const img = document.getElementById('myimg');
                img.setAttribute('src', url);
            })
            .catch((error) => {
                switch (error.code) {
                    case 'storage/object-not-found':
                        // File doesn't exist
                        break;
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
            }});


    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    useEffect( ()=>{
        fun();
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };
        return (

            <div className={" h-100"}  >
                { !Loading ?  <ReactLoading
                    className="m-auto justify-content-center p-2 mt-5 mb-4"

                    // type="spinningBubbles"
                    type={"bars"}
                    color="#b2c1cc"
                    height={317}
                    width={60}
                />  :
                 querySnapshot.map((blog, index)=>(
                     <Grid style= {{
                         padding: '21px',
                         /* margin-right: -31px; */
                         marginRight: '-37px',
                     }
                     }>
                    <Grid mt={2} border={2} borderRadius={2} borderColor={"#b2c1cc"} marginRight={5}   container maxWidth spacing={2}>
                        <Box borderRadius={2} style={{background:"#f2f2f8"}}  sx={{
                            display: 'flex', '& > *': {m: 'auto',padding:'0', width: '100%',height: '100%',},}}  item xs={12} sm={2}>
                            <ButtonGroup orientation="vertical" aria-label="large vertical outlined button group " variant="text">
                                <Button   style={{height:'50%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} key="one">update </Button>
                                <Button  style={{height:'50%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} key="two">Delete </Button>
                                {/*<Button  style={{height:'33%', padding: '5',fontFamily:"fantasy",color:"#3e5a6e"}} key="three">Three </Button>*/}
                            </ButtonGroup>
                        </Box>
                        <Grid  color={"red"} item xs={12} sm={6} >
                            <img src={blog.images[0]} width={100}/>
                            <img src={blog.images[1]} width={100}/>
                            <img src={blog.images[2]} width={100}/>
                            {/*<AnimatePresence initial={false} custom={direction}>*/}
                            {/*    <motion.img*/}
                            {/*        key={page}*/}
                            {/*        // const imageIndex = wrap(0, images.length, page);*/}

                            {/*    src={blog.images[wrap(0,blog.images.length, page)]}*/}
                            {/*        custom={direction}*/}
                            {/*        initial="enter"*/}
                            {/*        animate="center"*/}
                            {/*        exit="exit"*/}
                            {/*        transition={{*/}
                            {/*            x: { type: "spring", stiffness: 300, damping: 30 },*/}
                            {/*            opacity: { duration: 0.2 }*/}
                            {/*        }}*/}
                            {/*        drag="x"*/}
                            {/*        dragConstraints={{ left: 0, right: 0 }}*/}
                            {/*        dragElastic={1}*/}
                            {/*        onDragEnd={(e, { offset, velocity }) => {*/}
                            {/*            const swipe = swipePower(offset.x, velocity.x);*/}

                            {/*            if (swipe < -swipeConfidenceThreshold) {*/}
                            {/*                paginate(1);*/}
                            {/*            } else if (swipe > swipeConfidenceThreshold) {*/}
                            {/*                paginate(-1);*/}
                            {/*            }*/}
                            {/*        }}*/}
                            {/*    />*/}
                            {/*</AnimatePresence>*/}
                            <div className={"next"}
                                 onClick={() => paginate(1)}>
                                {"‣"}
                            </div>
                            <div className="prev" onClick={() => paginate(-1)}>
                                {"‣"}
                            </div>

                        </Grid>
                        <Grid style={{background:"#f2f2f8"}} item xs={12} sm={5} key={index} >
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={6}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>Part Name:</Typography></Grid>
                                <Grid item xs={6}><Typography>{blog.PartName}</Typography></Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={6}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>Car Type:</Typography></Grid>
                                <Grid item xs={6}><Typography>{blog.CarType}</Typography></Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={6}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}><AiOutlineQrcode /> Code:</Typography></Grid>
                                <Grid item xs={6}><Typography>{blog.Code}</Typography></Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={6}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}><GiWeight />  Weight:</Typography></Grid>
                                <Grid item xs={6}><Typography>{blog.Weight}</Typography></Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={6}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}><ImLocation />  Location:</Typography></Grid>
                                <Grid item xs={6}><Typography>{blog.Location}</Typography></Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={6}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}><ImPriceTag />  Price:</Typography></Grid>
                                <Grid item xs={6}><Typography>{blog.Price}  ₪</Typography></Grid>
                            </Grid>
                            <Grid container maxWidth spacing={2} xs={12}>
                                <Grid item xs={12}><Typography className={'fs-6 '} style={{fontFamily:'fantasy'}}>Description:</Typography></Grid>
                                <Grid item xs={12}><Typography>{blog.Description} </Typography></Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                     </Grid>

                ))}

                {/*<Button onClick={fun}>refresh</Button>*/}
            </div>
        );
};