import Product from '../models/productSchema'


export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
         await Product.findByIdAndDelete(id)
        
        res.status(200).json({mess: 'Product deleted successfully'})
    } catch (error) {
        res.status(500).json(error)
    }
}