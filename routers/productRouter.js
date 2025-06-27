import router from 'express'
const productRouter = router()

import {
    getProducts,
    postProduct,
    getAproduct,
    editProduct,
    deleteProduct
} from '../controllers/productController/productBarrel'
import authMiddleware from '../middlewares/authMiddleware'

productRouter
.post('/product/create', authMiddleware, postProduct)

.get('/products', getProducts)
//query params router
.get('/product', getAproduct)

.put('/product/update/:id', authMiddleware, editProduct)

.delete('/product/delete/:id', authMiddleware, deleteProduct)



export default productRouter