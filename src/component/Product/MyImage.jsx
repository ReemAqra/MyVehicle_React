import React,  {useContext} from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

export default function MyImage (img) {
        return (
            <Grid container m={0} spacing={4} xs={12} >
                {img.map((image ,index) => (
                    // <Box className={`Box`} sx={2}  key={index}>
                    //     yui
                    //     {/*<img src={image[index]}*/}
                    //     {/*     // onClick={()=>{handletab(index)}}*/}
                    //     {/*     alt="" width="70" height='70'*/}
                    //     />
                    // </Box>
                    <p>{index}</p>
                ))
                }

            </Grid>
        );

}

