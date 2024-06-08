import express from 'express'
import { AIController } from '../controllers'

const AIRouter = express.Router()

AIRouter.get('/version', AIController.getAllModelVersions)
AIRouter.patch('/version', AIController.changeUsingVersion)
AIRouter.get('/version/current', AIController.getUsingModelVersion)

export default AIRouter
