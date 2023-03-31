import {combineReducers, createStore,applyMiddleware } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
// import { getProductDetails } from "./action/productActions"
import { getProductDetailsReducer, getProductsReducer } from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer.js"
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;