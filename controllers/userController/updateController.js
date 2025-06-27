import User from '../models/userSchema'


const updateUser = async (req, res) => {
    const { id } = req.params
    const requestId = req.user._id
    const { username, email, password } = req.body

    if (id.toString() === requestId.toString()) {
        try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (!user) {
            return res.status(404).json({ message: 'No user found!' })
        }
        res.json({ message: 'User updated successfully!' })
        }
        catch (err) {
            console.log(err.message)
        }
    }
    else {
        return res.status(401).json({ message: "Unauthorized, you cannot edit this user!" })
    }
}



const updateUserProfile = async (req, res) => {
    const { id } = req.params
    const requestId = req.user._id
    const { country, postalCode, Bio } = req.body

    if (id.toString() === requestId.toString()) {
        try {
        await User.findByIdAndUpdate(id, {
            $set: {
                    'profile.country': country,
                    'profile.postalCode': postalCode,
                    'profile.Bio': Bio
                }
        }, { new: true })
        res.json({ message: 'User profile updated successfully!' })
        }
        catch (err) {
            console.log(err.message)
        }
    }
    else {
        return res.status(401).json({ message: "Unauthorized, you cannot edit this user profile!" })
    }
}

export default { updateUser, updateUserProfile }