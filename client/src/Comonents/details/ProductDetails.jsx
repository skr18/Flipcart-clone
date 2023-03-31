import React from "react";
import { Typography,Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {LocalOffer as Badge } from '@mui/icons-material';

//css
const SmallText = styled(Box)`
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledBadge = styled(Badge)`
    margin-right:10px;
    color: #16e716;
    font-size: 15px
`

const ProductDetails = ({product}) =>{

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime()+(6*24*60*60*1000))
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
        <div>
            <Typography>
                    {product.title.longTitle}
            </Typography>
            <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
                        10 Rating & 1 Review
                    <Box component='span'>
                        <img src={fassured} alt="fassured" style={{width:77,marginLeft:20}}/>
                </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{fontSize:28}}>
                        ₹{product.price.cost}
                </Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#878787'}}>                        
                        <strike>₹{product.price.mrp}</strike>
                </Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'green'}}>
                        ₹{product.price.discount}
                </Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Bank OfferExtra 1% Off on UPI transactionsT&C</Typography>
                <Typography><StyledBadge/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><StyledBadge/>Special PriceGet extra 3% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyledBadge/>Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</Typography>
                <Typography><StyledBadge/>Partner OfferBuy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Typography>
                <Typography><StyledBadge/>Buy this Product & Get Extra 5% Off on DIGITEK DTR 550 LW Tripod</Typography>
            </SmallText>
            <Table style={{marginTop:15}}>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color:'#878787'}} >Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Warenty</TableCell>
                        <TableCell style={{fontWeight:600}}>No Warenty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Typography style={{fontWeight:600,color:'blue'}}>SuperNet</Typography>
                            <Typography>Gst Invoice Available</Typography>
                            <Typography>Get More seller Starting From ₹{product.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="coins" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default ProductDetails;