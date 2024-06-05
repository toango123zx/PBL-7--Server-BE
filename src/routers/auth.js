import express from 'express'
import { authController } from '../controllers'
import { authValidation } from '../validation'
import { authMiddleware } from '../middlewares'

const authRouter = express.Router()

authRouter.post(
    '/register',
    authValidation.userRegisterValidation,
    authValidation.checkDuplicateUser,
    authMiddleware.createUser,
    authController.userRegister,
)
authRouter.post('/login', authController.login)
authRouter.get('/seed-data', authController.seedData)

export default authRouter
