import authRouter from './auth'
import chatRouter from './chat'
import sourceRouter from './source'
import categoryRouter from './category'
import newsRouter from './news'
import feedBackRouter from './feedBack'
import modelRouter from './model'

export default function route(app) {
    app.use('/', authRouter)
    app.use('/chat', chatRouter)
    app.use('/source', sourceRouter)
    app.use('/category', categoryRouter)
    app.use('/news', newsRouter)
    app.use('/feed-back', feedBackRouter)
    app.use('/model', modelRouter)
}
