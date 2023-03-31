import {Box,styled,Typography} from "@mui/material"
import React, { useEffect, useState } from "react";

const Header = styled(Box)`
    padding:15px 25px;
    background: #fff;
    border-bottom: 2px solid #f0f0f0;
    color: #878787
`
const Container = styled(Box)`
    padding:15px 25px;
    background: #fff;
    & > p {
        margin-bottom:20px;
        font-size: 14px;
    }
    & > h6 {
        border-top: 2px solid #f0f0f0;
        margin-bottom:20px;
        ma
    }
`
const Price = styled(Box)`
    float: right;
`
const Discount = styled(Typography)`
    color: green;
    font-weight: 500;
`
const TotalView = ({cartItems}) =>{
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    useEffect(()=>{
        totalAmount();
    },[cartItems])

    const totalAmount = () =>{
        let price=0 , discount=0;
        cartItems.map(item =>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
    return(
        <Box style={{position:'fixed'}}>
            <Header>
                <Typography>PRICE DETAILS</Typography>
            </Header>
            <Container>
                <Typography>price ({cartItems.length} items)
                    <Price component='span'>₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component='span'>-{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component='span'>₹40</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component='span'>₹{price - discount + 40}</Price>
                </Typography>
                <Discount>You Will Save ₹{discount -40} On This Order
                </Discount>
            </Container>
        </Box>
    )
}

export default TotalView;