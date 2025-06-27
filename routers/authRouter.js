import Router from 'router'
const authRouter = Router()
import authMiddleware from '../middlewares/authMiddleware'

import { loggingIn, loggingOut } from '../controllers/authController/authorization'

authRouter
.post('/user/login', loggingIn)
//Authorization middleware is added to ensure that only authorized users can logout
.post('/user/logout', authMiddleware, loggingOut)


export default authRouter