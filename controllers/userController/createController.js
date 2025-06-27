import bcrypt from 'bcryptjs'
import User from '../models/userSchema'


export const createUserAccount = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const returnedemail = await User.findOne({ email: email })
        if (returnedemail) {
            return res.status(400).json({ message: 'Email aready exists!'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        if (email === 'harry@gmail.com' || email === 'Eniola@gmail.com') {
            const user = new User({ ...req.body, password: hashedPassword, admin: true })
            await user.save()
        }

        const user = new User({ ...req.body, password:hashedPassword })
        await user.save()
        res.json({message: 'User created succesfully!'})
    }
    catch (err) {
        console.log('Unable to create user account', err)
        res.json({errmessage: err.message})
    }
}