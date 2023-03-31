import React from "react"
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Box, Grid, styled, Typography} from '@mui/material'

//components
import { getProductDetails } from "../../redux/action/productActions";
import ActionItems from "./ActionItems";
import ProductDetails from "./ProductDetails";

//css
const Components = styled(Box)`
    background: #F2F2F2
`
const Container = styled(Grid)`
    display: flex;
    // background: #FFFFFF;
`
const RightContainer = styled(Grid)(({theme})=>({

    marginTop: '50px',
    [theme.breakpoints.down('md')]:{
        marginLeft:'60px'
    }
}))

const DetailView = () =>{

    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading , product } = useSelector(state => state.getProductDetails);


    useEffect(()=>{
        if(product && id !== product.id)
            dispatch(getProductDetails(id))
    },[dispatch,id,loading,product])

    
    return(
        <Components>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}> 
                        <ProductDetails product={product}/>
                    </RightContainer>

                </Container>
            }
        </Components>
    )
}

export default DetailView;