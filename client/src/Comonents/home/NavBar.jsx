import { Box, styled, Typography } from "@mui/material";
import React from "react";
import {navData} from '../../Constants/data';

const Component = styled(Box)(({theme})=>({

    display: 'flex',
    margin: '55px 130px 0px 130px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]:{
        margin:0,
        overflow:'overlay'
    }
}))
const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`
const Text = styled(Typography)`
    font-size: 14px;
    font-weigth: 600px;
`

const NavBar = () =>{
    return(
        <Component>
            {
                navData.map(data =>(
                    <Container>
                        <img src={data.url} alt="nav" style={{width:64}} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;