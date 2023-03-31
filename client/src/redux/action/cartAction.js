import React from "react";
import axios from 'axios'
import * as actionType from '../constants/cartConstant.js'
const URL = 'http://localhost:8000';
export const addToCart = (id,quantity) =>async(dispatch)=> {
    try {
        const {data} = await axios.get(`${URL}/product/${id}`)
        dispatch({type: actionType.ADD_TO_CART , payload:{...data,quantity}})
    } catch (error) {
        dispatch({type: actionType.ERROR_CART, payload: error.message});
        console.log("Error while calling add to cart api ",error.message);
    }
}

export const removeFromCart = (id) => (dispatch) =>{
    dispatch({type: actionType.REMOVE_FROM_CART , payload: id});
}