import authRouter from './auth'
import chatRouter from './chat'

export default function route(app) {
    app.use('/', authRouter)
    app.use('/chat', chatRouter)
}
