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
import {GiWeight} from "react-icons/gi";
import {AiOutlineQrcode} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {BiCommentDetail} from "react-icons/bi";
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";
export default function SinglePageAcc() {
    const { t, i18n } = useTranslation();

    const {getSingleProduct_acc ,
        isSingleLoading,
        singleProduct} =useProductContext();
    const {id} =useParams();
    const [singuleAcc , setsinguleAcc]=React.useState({});

    const [Loading,setLoading]=useState(false)
    console.log("file:Single",singleProduct)

    const [arr,setarr]=useState([])
    const [activeimg,setactiveimge] = React.useState(null)
    const [index,setindex]=useState(0)

    const get =async ()=>{
        setLoading(true)
        const querySnapshot = await getDoc(doc(db, "accessories",id));

        console.log("querySingleacss:",querySnapshot.data())
        setsinguleAcc( querySnapshot.data());
        setLoading(false)
        console.log("img:",querySnapshot.data().images)
        setarr(arr =>[...querySnapshot.data().images])
        console.log("imgarr:",arr)
        if (!singuleAcc.images )
            return (<ReactLoading
                className="m-auto justify-content-center p-2 mt-5 mb-4"
                // type="spinningBubbles"
                type={"bars"}
                color="#b2c1cc"
                height={317}
                width={60}
            />)

    }
    const handletab=(index)=>{
        setindex(index)
        setactiveimge(arr[index])
    }
    const handleactivetabs=(index)=>{
        if(arr[index] ===activeimg){
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
                <PageNavigation  title={singuleAcc.PartName}/>
                <Container className={"container"}>
                    <div className={" grid row  container col-sm-12 "}>
                        {/*Product Image*/}
                        <Grid xs={6} container  className={"product_images  col-lg-6"}>
                            <Grid margin={"auto"} item xs={3}>
                                {arr.map((image ,index) => (
                                    <Box className={`Box`} sx={2} justifyContent={"center"} padding={1} margin={"auto"} alignItems={"center"} >
                                        {image != null ?
                                            <figure className={'align-items-center justify-content-center d-flex'}>
                                                <img   className={handleactivetabs(index)} onClick={()=>{handletab(index)}} src={image} alt="" width="70" height='70'/>
                                            </figure> : null}
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={9} borderRadius={1} bgcolor={'#d2d6e7'} borderColor={'#ffcc00'}  >
                                <img className={'border p-2  border-2 w-100 '}border={1}  width={'100%'} height={'100%'}  src={arr[index]}/>
                            </Grid>
                        </Grid>
                        {/*Product Data*/}
                        <div className={'product-data col-lg-6'}>
                            <h2>{singuleAcc.PartName}</h2>
                            <p className={'w-100 mb-0 opacity-75'}>{singuleAcc.CarType}</p>
                            <p className={'w-100  border  border-bottom-1 opacity-75'}></p>
                            <h5 style={{fontFamily:'fantasy'}}>{singuleAcc.Price} ₪</h5>
                            <Grid  container mt={1} mb={1}  border={1} borderColor={'#ccc'} borderRadius={2} padding={2}>
                                <Grid item xs={4}>
                                <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}><GiWeight className={'me-1'} /> {t("Weight")}</Grid>
                                <Grid  justifyContent={"center"} alignItems={"center"} display={"flex"}>{singuleAcc.Weight}</Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}><AiOutlineQrcode className={'me-1'}/> {t("Code")}</Grid>
                                    <Grid  justifyContent={"center"} alignItems={"center"} display={"flex"}>{singuleAcc.Code}</Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid className={'opacity-50 mb-1'} justifyContent={"center"} alignItems={"center"} display={"flex"}><ImLocation className={'me-1'} />{t("Location")}</Grid>
                                    <Grid justifyContent={"center"} alignItems={"center"} display={"flex"}>{singuleAcc.Location}</Grid>
                                </Grid>

                            </Grid>
                            <Grid container spacing={0}  width={'100%'} padding={2} border={1} borderColor={'#ccc'} borderRadius={2}>
                                <p style={{fontFamily:'fantasy'}}><BiCommentDetail /> {t("Description")}:</p>
                               <p>
                                   {singuleAcc.Description}
                               </p> </Grid>
                            <Grid border={1} width={'100%'} padding={2} mt={2} borderColor={'#ccc'} borderRadius={2} >
                                <p>Posted By: {singuleAcc.email}</p>
                            </Grid>

                        </div>


                    </div>
                </Container>

            </Warrper>

    }

        </>
        );

}
const Warrper =styled.section`
.container{
  padding: 2rem 0;
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

