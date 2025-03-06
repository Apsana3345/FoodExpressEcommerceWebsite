import express from 'express';
import { addToCart, updateCart, getUserCart } from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

// multiple endpoints
cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/update',authUser,updateCart)


export default cartRouter;