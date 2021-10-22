// const http = require('http');
const express = require('express');
const path = require('path')
const expressHbs = require('express-handlebars')
// const bodyParser = require('body-parser')

const app = express();
// for pug
// app.set('view engine', 'pug');
// app.set('views', 'views')

// for handlebars
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorPage = require('./routes/404');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

// app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.json())

app.use('/', (req, res, next) => {
  console.log('This always runs')
  next();
})

app.use('/admin', adminData.route);
app.use(shopRoutes);

app.use(errorPage)

// app.use('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, 'views', '404.html'))
// })

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)