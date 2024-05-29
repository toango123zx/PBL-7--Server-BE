import express from 'express'
import { sourceController } from '../controllers'

const sourceRouter = express.Router()

sourceRouter.get('/', sourceController.getAllSources)

export default sourceRouter
