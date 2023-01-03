import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from "react-loading";


export default   function  MyPost_V  (Props) {

    useEffect( ()=>{

    },[])


        return (

          <>
              <ReactLoading
                  className="m-auto justify-content-center p-2 mt-5 mb-4"
                  // type="spinningBubbles"
                  type={"bars"}
                  color="#b2c1cc"
                  height={320}
                  width={60}
              />
          </>
        );
};