import express from 'express'
import { modelController } from '../controllers'
import { modelValidation } from '../validation'
import { authMiddleware } from '../middlewares'

const modelRouter = express.Router()

modelRouter.post('/', authMiddleware.verifyToken, authMiddleware.checkAdminRole, modelValidation.modelValidation,  modelValidation.checkDuplicateModel, modelController.createModel)

export default modelRouter
