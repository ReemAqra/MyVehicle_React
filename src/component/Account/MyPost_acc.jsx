import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {query,where,collection ,getDocs} from 'firebase/firestore'
import "./MyPost_acc.Module.scss"
import { db} from "../../FireDB";
import ReactLoading from "react-loading";
import {UseAuth} from "../../context/AuthContext";
import MyAcc from "./MyAcc";
import search1 from "../IMG/Search1.png";
import {MdOutlineAddCircle, MdOutlinePostAdd} from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Link} from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default   function  MyPost_acc  () {

    const [querySnapshot,setquerySnapshot]=React.useState([])
    const [Loading, setLoading]=React.useState(undefined);
    const {user}=UseAuth();
    const fun = async (querySnapshot)=>{
        querySnapshot = await getDocs(query(collection(db, "Accessories"), where("user", "==", user.uid)));
        querySnapshot.docs.forEach((doc) => {
           setquerySnapshot(querySnapshot =>[...querySnapshot,doc])
            console.log("Accessories = ",querySnapshot )
            setLoading(true)

        })
    }
    React.useEffect(() => {
        fun()

    }, [])

    if(querySnapshot.length === 0)return (<>

            <div className={'w-100 m-auto mt-5  align-items-center justify-content-center d-flex'}>
                <img width={'20%'} src={search1}/>
            </div>
            <div className={"w-100 text-center align-items-center justify-content-center d-flex"}>
                <p className={'p-3 fs-5 fst-italic opacity-75 w-100'}>No Post Yet, add you Part cars and wait to sell them </p>
            </div>
            <div className={"w-100 align-items-center justify-content-center d-flex"}>
                <Button  >
                    <MdOutlineAddCircle className={'me-2 m-auto'} />

                    <Link style={{textDecoration:'none'}} className="text-white" to="./../../sellNow/sellAccessoriess">  Post Your First Parts</Link>

                </Button>

            </div></>
    )
        return (
            <div className={" h-100"}  >
                { !Loading ?
                    <ReactLoading className="m-auto justify-content-center p-2 mt-5 mb-4"
                    type={"bars"} color="#b2c1cc" height={317} width={60}/>
                    :
                    querySnapshot.map((blog, index)=>{return(<><MyAcc  blog={blog} index={index}/></>)})}
            </div>
        );
};



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
