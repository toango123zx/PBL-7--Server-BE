import express from 'express'
import { newsController } from '../controllers'

const newsRouter = express.Router()

newsRouter.get('/', newsController.getNews)

export default newsRouter
