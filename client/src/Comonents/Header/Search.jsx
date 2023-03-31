import React from 'react'
import { InputBase, List, ListItem } from "@mui/material";
import { Box, styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useState , useEffect} from 'react';
import {useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
//components
import { getProducts } from "../../redux/action/productActions";

const Searchcontainer = styled(Box)`
    background: #fff;
    width: 40%;
    border-radius: 5px;
    margin-left: 15px;
    display: flex;
    top: 0; 
`
const Searchinputbase = styled(InputBase)`
    width: 100%;
    padding-left: 10px;
    font-size: unset;
`
const SearchIconwraper = styled(Box)`
    color: blue;
    padding: 5px;
`
const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: black;
    margin-top: 40px;
    max-width: 590px;
`
const Search = () =>{

    const [text , setText] = useState('');
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() =>{ 
        dispatch(getProducts());
    },[dispatch])
    const getText = (text) =>{
        setText(text);
    }
    return(
        <Searchcontainer>
            <Searchinputbase 
                    placeholder='Search For Product,Brand & More...'
                    onChange={(e) => getText(e.target.value)}
                    value={text}
                    />
            <SearchIconwraper>
                <SearchIcon/>
            </SearchIconwraper>
            {
                text &&
                    <ListWrapper>
                        {
                            products.filter( product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                                <ListItem>
                                    <Link to={`/product/${product.id}`} onClick={()=> setText('')} style={{textDecoration:'none',color:'inherit'}}
                                    >
                                    {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </Searchcontainer>
    )
}
export default Search;