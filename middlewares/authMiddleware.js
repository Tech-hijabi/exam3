import jwt from 'jsonwebtoken'
import userModel from '../models/userSchema'


const authMiddleware = async (req, res, next) => {
    const accessToken = req.cookies.accessToken
    const jwtSecret = process.env.JWT_SECRET
    if (!accessToken) {
        return res.status(401).json({ message: 'Login required' })
    }
    try {
        const tokenEncryption = jwt.verify(accessToken, jwtSecret)
        if (!tokenEncryption) {
            return res.status(401).json({ message: 'Invalid token' })
        }
        const validUser = await userModel.findById(tokenEncryption.id).select('-password')
        if (!validUser) {
            return res.status(401).json({ message: 'Invalid comparison with id' })
        }
        req.user = validUser
        next()
    }
    catch (error) {
        return res.status(500).json(error)
    }
}

export default authMiddleware