import express from 'express'

import { userSignup } from '../controller/user-control.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
// import { addPaymentGateway } from '../controller/payment-controller.js';
const router = express.Router();

router.post('/signup',userSignup);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);
// router.post('/payment',addPaymentGateway);


export default router;
