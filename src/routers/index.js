import authRouter from './auth'
import chatRouter from './chat'
import sourceRouter from './source'
import categoryRouter from './category'

export default function route(app) {
    app.use('/', authRouter)
    app.use('/chat', chatRouter)
    app.use('/source', sourceRouter)
    app.use('/category', categoryRouter)
}
