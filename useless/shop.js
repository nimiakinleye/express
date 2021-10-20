const path = require('path')
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('You are at the shop')
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

module.exports = router