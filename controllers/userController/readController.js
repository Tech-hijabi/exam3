import User from '../models/userSchema'


const readUserAcc = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        if (!users){
            return res.status(400).json({ message: 'No user found!'})
        }
        res.status(200).json(users)
    }
    catch (error){
        res.status(500).json(error)
    }
}

const readAUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}


export default { readUserAcc, readAUser }