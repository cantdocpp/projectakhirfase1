var express = require('express');
var router = express.Router();
var Model = require('../models')


router.get('/', (req, res) => {
  res.render('../views/register');
})

router.get('/seller', (req, res) => {
  res.render('../views/registerseller');
})

router.post('/seller', (req, res) => {
  Model.Seller.create()
  .then({
    email: req.body.email,
    password: req.body.password
  })
  .catch()
  res.send('registrasi sukses')
})

module.exports = router;
