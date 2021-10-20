const express = require('express');

const path = require('path')

const rootDir = require('../util/path')

const router = express.Router();

const products = []

router.get('/add-product', (req, res, next) => {
  console.log('Another Server running successfully')
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product.pug', {pageTitle: 'Add-product', path: '/admin/add-product'})
});

router.post('/add-product', (req, res, next) => {
  products.push(req.body)
  res.redirect('/')
})

exports.route = router;
exports.products = products;