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
    '/accept',
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

feedbackRouter.get(
    '/approved',
    authMiddleware.verifyToken,
    authMiddleware.checkAdminRole,
    feedbackController.getApprovedFeedbacks,
)

feedbackRouter.get(
    '/export',
    authMiddleware.verifyToken,
    authMiddleware.checkAdminRole,
    feedbackController.exportFeedbackData,
)

export default feedbackRouter
