const express = require('express')
var logger = require('morgan')
var path = require('path')
const route = require('./routers')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// app.use(logger('dev'));

app.use(logger('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
