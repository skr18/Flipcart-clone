import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipese } from "../../utils/addEllipses";
import ButtonGroup from "./ButtonGroup";

//component
import {removeFromCart} from "../../redux/action/cartAction"
import { useDispatch } from "react-redux";
//css
const Comonent = styled(Box)`
    border-top: 3px solid #f0f0f0;
    display: flex; 
`
const LeftComonent = styled(Box)`
    margin: 20px;
    display:flex;
    flex-direction: column;
`
const SmallText = styled(Typography)`
    color: #878787;
    margin-top: 10px;
    font-size: 15px;
`
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: black;
    font-weight: 600;
`
const CartItem = ({item}) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();
    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id));
    }
    return(
       
       <Box style={{backgroundColor:"#fff"}}>
            <Comonent>
                <LeftComonent>
                    <img src={item.url} alt="img" style={{height:110,width:110}} />
                    <ButtonGroup/>
                </LeftComonent>
                <Box style={{margin:20}}>
                    <Typography>{addEllipese(item.title.longTitle)}</Typography>
                    <SmallText>Seller: RealDeal
                        <Box component='span'><img src={fassured} alt="img" style={{width:60, marginLeft:10}} /></Box>
                    </SmallText>
                    <Typography style={{margin:'20px 0'}}>
                        <Box component='span' style={{fontWeight:600}}>
                                ₹{item.price.cost}
                        </Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{color:'#878787'}}>                        
                                <strike>₹{item.price.mrp}</strike>
                        </Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{color:'green'}}>
                                ₹{item.price.discount}
                        </Box>
                </Typography>
                <Remove onClick={()=> removeItemFromCart(item.id)}>Remove</Remove>
                </Box>
            </Comonent>
        </Box>
    )
}

export default CartItem;