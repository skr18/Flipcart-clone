import { styled ,Box} from "@mui/material";
import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { getProducts } from "../../redux/action/productActions";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Slide from "./Slide";
import Midslide from "./Midslide";
import MidSection from "./MidSection";

const Component = styled(Box)`
    padding: 8px;
    background: #d6d6e2;
`

const Home = () =>{

    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    
    return(
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <Midslide products={products} title="Deal Of The Day!" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Top pics" timer={false}/>
                <Slide products={products} title="Trending" timer={false}/>
                <Slide products={products} title="Recomended" timer={false}/>
            </Component>
        </>
    )
}

export default Home;