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
  Model.Seller.create({
    email: req.body.email,
    password: req.body.password
  })
  .then(function() {
    res.redirect('/')
  })
})

router.get('/user', (req, res) => {
  res.render('../views/registeruser');
})

router.post('/user', (req, res) => {
  Model.User.create()
  .then(function(){
    email: req.body.email,
    password: req.body.password
  })
  res.send('registrasi sukses')
})



module.exports = router;
