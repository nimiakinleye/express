const express = require('express')
const path = require('path')

const router = express.Router()

router.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'))
  res.render('404', { pageTitle: 'Page not found' })
})

module.exports = router