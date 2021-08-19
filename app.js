const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorPage = require('./routes/404')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

// app.get('/', (req, res, next) => {
//   console.log('in another middleware')
//   res.send('<h1>Hello from Express!</h1>')
// })

app.use(errorPage)

app.listen(1000)