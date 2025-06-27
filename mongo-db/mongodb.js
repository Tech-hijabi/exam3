const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDb:')
    }
    catch (err) {
        console.log('Error connecting to MongoDb:', err.message)
    }
}

module.exports = connectdb