import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import React from "react";

export default function step1(){
    return(
        <Paper>
            <Box className={'w-100'}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        {renderInputText({
                            label:"Year of release ",
                            name:"vehicleMade"
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {renderInputText({
                            label:"Year of release ",
                            name:"vehicleMade"
                        })}
                    </Grid>
                </Grid>
            </Box>
            <Box className='w-100' minHeight='50px'>
                <Grid container mt={5} spacing={2} justifyContent={'flex-end'}  >
                    {renderButton({lable:"Next",hanbleOnClick:handleNext})}

                </Grid>
            </Box>
        </Paper>
    )
}
