import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

//components
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

//css
const Container = styled(Grid)(({theme})=>({

    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }
}))

const Header = styled(Box)`
    padding:15px 25px;
    background: #fff;
`
const ButtonWraper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
`
const LeftComponent = styled(Grid)(({theme})=>({

    paddingRight:'15px',
    [theme.breakpoints.down('md')]:{
        marginButtom:'15px'
    }
}))
const Cart = () =>{
    const {cartItems} = useSelector(state=> state.cart);
    return(
       <Box style={{backgroundColor:"#f2f2f2"}}>
        {
            cartItems.length ?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                <CartItem item={item}/>
                            ))
                        }
                        <ButtonWraper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWraper>
                    </LeftComponent>
                   <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
            :
                <EmptyCart/>    
        }
       </Box>
    )
}

export default Cart;