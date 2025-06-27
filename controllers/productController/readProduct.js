import Product from '../models/productSchema'


const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        if (!products){
            return res.status(200).json({ message: 'No product available!'})
        }
        res.json(products)
    }
    catch (err){
        console.log(err.message)
    }
}

const getAproduct = async (req, res) => {
    //get product by query params
    const { productName, color, size } = req.query
    const filter = {}
    if (productName) {
        filter.name = productName
    }
    if (color) {
        filter.color = color
    }
    if (size) {
        filter.size = size
    }
    try {
        const product = await Product.find(filter)
        if (!product){
            return res.status(200).json({ message: 'Product not found!'})
        }
        res.json(product)
    }
    catch (err){
        console.log(err.message)
    }
}

export default { getProducts, getAproduct }