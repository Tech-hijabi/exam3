import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from '../../models/userSchema'


const loggingIn = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.status(400).json({ message: 'Please provide all required fields' })
        return
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ message: 'User not found, please register' })
            return
        }
        const comparedPassword = await bcrypt.compare(password, user.password)
        if (!comparedPassword) {
            res.status(401).json({ message: 'email or password invalid' })
            return
        }
        const token = getToken(user._id)
        return res
        .cookie('accessToken', token, { httpOnly: true, sameSite: 'strict' })
        .status(200)
        .json({ message: 'User logged in successfully' })
    }
    catch (error) {
        res.status(500).json(error)
    }
}


const loggingOut = async (req, res) => {
    res.clearCookie('accessToken', { httpOnly: true, secure: false, sameSite: 'lax' })
    res.status(200).json({ message: 'User logged out succesfully' })
}


export default { loggingIn, loggingOut }