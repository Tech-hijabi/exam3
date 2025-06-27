import Cart from "../../models/cartSchema"
import Product from "../../models/productSchema"



export const postCartItem = async (req, res) => {
    const user = req.user
    const { incomingPId } = req.params
   
    try {
        const product = await Product.findById(incomingPId)
        if (!product) {
            res.status(400).json({ message: "Product not found" })
            return
        }
        const cart = await Cart.findOne({ userId: user._id })
        if (!cart) {
            const newCart = new Cart({ userId: user._id, products: [{ productId: incomingPId, quantity: 1 }] })
            await newCart.save()
        }
        else {
            const productIndex = Cart.products.findIndex(item => item.productId === incomingPId)
            if (productIndex > -1) {
                Cart.products[productIndex].quantity++
            }
            else {    
                Cart.products.push({ productId: incomingPId, quantity: 1 })
            }
            await cart.save()
        }
    }
    catch (error) {
       console.log(error)
    }
}