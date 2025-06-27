import router from 'express'
const userRouter = router()

import {
    readUserAcc,
    readAUser,
    createUserAccount,
    updateUser,
    updateUserProfile,
    deleteUser 
} from '../controllers/userController/barrel'
import authMiddleware from '../middlewares/authMiddleware'


userRouter
//Create
.post('/user/register', createUserAccount)
//Read
.get('/users', authMiddleware, readUserAcc)
.get('/user/:id', authMiddleware, readAUser)
//Update
.put('/user/update/:id', authMiddleware, updateUser)
.put('/userprofile/update/:id', authMiddleware, updateUserProfile)
//Delete
.delete('/user/delete/:id', authMiddleware, deleteUser)

export default userRouter;