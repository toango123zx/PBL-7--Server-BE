const express = require('express')
const { chatController } = require('../controllers')

const chatRouter = express.Router()

chatRouter.post('/create-room', chatController.createRoom)
chatRouter.post('/request-message/:idRoom', chatController.createMessage)
chatRouter.get('/test', chatController.test)

module.exports = chatRouter
