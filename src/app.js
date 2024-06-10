import 'dotenv/config'
import express from 'express'
import logger from 'morgan'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import cors from 'cors'

import route from './routers'
import { AI_SERVICE_BASE_URL, PRODUCTION_WEBAPP_URL } from './config/common.config'

const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(dirname(fileURLToPath(import.meta.url)), 'views'))
app.set('view engine', 'jade')

// app.use(logger('dev'));

app.use(logger('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'public')))
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            AI_SERVICE_BASE_URL,
            PRODUCTION_WEBAPP_URL,
        ],
        credentials: true,
    }),
)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
