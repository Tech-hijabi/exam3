import Product from '../models/productSchema'


export const postProduct = async (req, res) => {
    const { name, description, price, size, color } = req.body
    requestId = req.user._id
    if (!name || !description || !price || !size || !color) {
        return res.status(400).json({ message: 'Please provide all required fields' })
    }
    try {
        //requesting the userId that has been authorized inside the productcontroller
        const product = new Product({...req.body, userId: requestId})
        await product.save()
        res.status(201).json({message: 'Product has been created succesfully!'})
    }
    catch (err) {
        console.log(err.message)
        res.json({ errmessage: err.message })
    }
}