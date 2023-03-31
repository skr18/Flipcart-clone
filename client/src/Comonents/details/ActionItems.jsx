import { Button, styled } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import {ShoppingCart as Cart, Bolt as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/action/cartAction'
import { useState } from "react";
import {payUsingPaytm} from '../../service/api'
import { post } from "../../utils/paytm";
const LeftContainer = styled(Box)(({theme})=>({

    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding: '20px 40px'
    }
}))
const Image = styled('img')({
    padding:'15px',
    width: '95%'
})
const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height: '50px',
    [theme.breakpoints.down('lg')]:{
        width: '46%',
    },
    [theme.breakpoints.down('lg')]:{
        width: '48%',
    }
}))

const ActionItems = ({product}) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);
    const {id} = product;
    const addItemToCart = ()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
    const buyNow=async() =>{
        let responce = await payUsingPaytm({amount:500 , email:'sujeet@gmail.com'});
        let information ={
            action:'https://securegw-stage.paytm.in/order/process',
            params: responce
        }
        post(information)
    }
    return(
        <LeftContainer>
            <Box style={{border: '1px solid #efeded',padding:'15px 20px',width: '90%'}}>
            <Image src={product.detailUrl} alt="img" />
            </Box>
            <StyledButton style={{marginRight:10,background:'#ff9f00'}} 
            variant='contained' 
            onClick={()=> addItemToCart()}><Cart/> Add To Cart</StyledButton>
            <StyledButton onClick={()=> buyNow()} style={{background:'#fb541b'}} variant='contained'><Flash/> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItems