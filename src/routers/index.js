const authRouter = require('./auth')
const chatRouter = require('./chat')

function route(app) {
    app.use('/', authRouter)
    app.use('/chat', chatRouter)
}

module.exports = route
