var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('../views/login');
})

router.get('/seller', (req, res) => {
  res.render('../views/loginSeller');
})

router.get('/user', (req, res) => {
  res.render('../views/loginUser')
})

module.exports = router;
