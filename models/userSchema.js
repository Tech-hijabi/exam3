import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: false
    },
    profile: {
        country: {
            type: String,
        },
        postalCode: {
            type: Number,
        },
        Bio: {
            type: String,
        }
    }
}, {timestamps: true})

const User = mongoose.model('user', userSchema)
export default User