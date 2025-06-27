import Router from "express"
import postCartItem from "../controllers/cartController/cart"
import authMiddleware from "../middlewares/authMiddleware"

const cartRouter = Router()


cartRouter
//post a cart
.post('/cart/create/:id', authMiddleware, postCartItem)


export default cartRouter

