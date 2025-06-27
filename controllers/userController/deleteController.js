import User from '../models/userSchema'


export const deleteUser = async (req, res) => {
    const { id } = req.params
    const {_id, admin} = req.user
    if (id === _id || admin === true) {
        try {
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: 'No user found!' })
        }
        res.json({ message: 'User deleted successfully' })
        }
        catch(err) {
            console.log(err.message)
        }
    }
    else {
        return res.status(400).json({ message: 'Unauthorized, cannot delete user!' })
    }
}