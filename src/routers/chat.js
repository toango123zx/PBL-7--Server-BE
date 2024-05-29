import express from 'express'
import { chatController } from '../controllers'

const chatRouter = express.Router()

chatRouter.post('/create-room', chatController.createRoom)
chatRouter.post('/request-message/:idRoom', chatController.createMessage)
chatRouter.get('/test', chatController.test)

export default chatRouter
