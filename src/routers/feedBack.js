import express from 'express'
import { authMiddleware } from '../middlewares'
import { feedBackController } from '../controllers'


const feedBackRouter = express.Router()

feedBackRouter.get('/', authMiddleware.verifyToken, authMiddleware.checkAdminRole, feedBackController.getFeedBack)
feedBackRouter.post('/', authMiddleware.verifyToken, feedBackController.createFeedBack)
feedBackRouter.post('/accpect', authMiddleware.verifyToken, authMiddleware.checkAdminRole, feedBackController.accpectFeedBack)
feedBackRouter.post('/reject', authMiddleware.verifyToken, authMiddleware.checkAdminRole, feedBackController.rejectFeedBack)


export default feedBackRouter
