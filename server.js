import express from 'express'
import UserRouter from './routers/userRouter.js'
import ProductRouter from './routers/productRouter.js'
import authRouter from './routers/authRouter.js'
import cartRouter from './routers/cartRouter.js'
import cookieParser from 'cookie-parser'
import connectdb from './mongo-db/mongodb.js'
import dotenv from 'dotenv'

dotenv.config()
connectdb()


const app = express()
const port = process.env.PORT

//App level middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

//Routes
app.use('/api', UserRouter)
app.use('/api', ProductRouter)
app.use('/api', authRouter)
app.use('/api', cartRouter)



app.listen(port, () => {
    console.log(`My server is running on port ${port}`)
})