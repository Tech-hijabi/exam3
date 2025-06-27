import Product from '../models/productSchema'


export const editProduct = async (req, res) => {
    const { id } = req.params
    const {name , description, price, size, color} = req.body
    const requestId = req.user._id

        try {
            const product = await Product.findOne({ _id: id, userId: requestId })
            if (!product) {
                res.status(400).json({ message: "Unauthorized, cannot edit product!" })
                return
            }
            await product.findByIdAndUpdate(id, {
                $set: {
                    'name': name,
                    'description': description,
                    'price': price,
                    'size': size,
                    'color': color
               }
             }, { new: true })

            await product.save()
            
            res.status(200).json({message: 'Product updated successfully'})
        }
        catch (error) {
            res.status(500).json(error)
        }
}