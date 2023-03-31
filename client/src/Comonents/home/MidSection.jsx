import { Box, Grid } from "@mui/material";
import { imageURL } from "../../Constants/data";
import React from "react";

const MidSection = () =>{
    return(
        <Grid lg={12} md={12} sm={12} xs={12} container style={{marginTop:7, justifyContent:'space-between'}}>
            {
                imageURL.map(image=>(
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <img src={image} alt="ad" style={{width:'100%'}}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default MidSection;
