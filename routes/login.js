var express = require('express');
var router = express.Router();
var Model = require('../models')

router.get('/', (req, res) => {
  res.render('../views/login');
})

router.get('/seller', (req, res) => {
  res.render('../views/loginSeller');
})




module.exports = router;
