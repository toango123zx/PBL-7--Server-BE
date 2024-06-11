import express from 'express'
import { authMiddleware } from '../middlewares'
import { feedbackController } from '../controllers'

const feedbackRouter = express.Router()

feedbackRouter.get(
    '/',
    authMiddleware.verifyToken,
    authMiddleware.checkAdminRole,
    feedbackController.getFeedBack,
)
feedbackRouter.post(
    '/',
    authMiddleware.verifyToken,
    feedbackController.createFeedBack,
)
feedbackRouter.post(
    '/accpect',
    authMiddleware.verifyToken,
    authMiddleware.checkAdminRole,
    feedbackController.acceptFeedBack,
)
feedbackRouter.post(
    '/reject',
    authMiddleware.verifyToken,
    authMiddleware.checkAdminRole,
    feedbackController.rejectFeedBack,
)

export default feedbackRouter
