import React from "react";
import { Button, Typography,styled,Box, Badge } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import { useState, useContext} from "react";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
//components
import LoginDialog from "../login/LoginDialog";

const Wrapper = styled(Box)(({theme})=>({

    display: 'flex',
    margin: '0 3% 0 auto',
    '& > button':{
        marginRight: '52px',
        fontSize: '16px',
        alignItems: 'center',
    },
    '& > p':{
        marginRight: '52px',
        fontSize: '16px',
        alignItems: 'center',
    },
    '& > div ':{
        marginRight: '52px',
        fontSize: '16px',
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'flex',
        flexDirection:'column',
    }
}));


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding:5px 50px;
    border-radius: 5px;
    box-shadow: none;
    font-weight:600;
    height: 32px;
`

const CustomButton = () =>{

    const [open,setOpen] = useState(false);
    const openDialog = () =>{
        setOpen(true);
    }
    const {cartItems} = useSelector(state=>state.cart);
    return(
       <Wrapper>
        <LoginButton variant="contained" onClick={()=> openDialog()}>Login</LoginButton>
        <Typography style={{minWidth:135,marginTop:7}}>Become a Seller</Typography>
        <Typography style={{marginTop:7}}>More</Typography>
        <Link style={{display: 'flex',textDecoration:'none',color:'inherit'}} to='/cart'>
            <Badge badgeContent={cartItems.length} color='secondary'>
                <ShoppingCart/>
            </Badge>
            <Typography style={{marginLeft:8}}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen} />
       </Wrapper>
    )
}

export default CustomButton;