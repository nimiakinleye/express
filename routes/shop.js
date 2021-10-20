const express = require('express');

const path = require('path')

const router = express.Router();

const admin = require('./admin')

router.get('/', (req, res, next) => {
  console.log('shop.js', admin.products)
  const products = admin.products
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.render('shop.pug', {prods: products, pageTitle: 'Shop', path: '/'})
}) 

module.exports = router;