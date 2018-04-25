var express = require('express');
var router = express.Router();
var Model = require('../models')
var bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  console.log(req.session.email);
  res.render('../views/login');
})

router.get('/seller', (req, res) => {
  res.render('../views/loginSeller');
})

router.post('/seller', (req, res) => {
  Model.Seller.findOne({
    where: {email: req.body.email}
  })
  .then(dataSeller => {
    var password = dataSeller.password
    if (bcrypt.compareSync(req.body.password, password)) {
      req.session.email = dataSeller.email
      res.send('sukses login')
    } else {
      res.redirect('/login/seller')
    }
  })
  .catch(err => {
  })
})

router.get('/user', (req, res) => {
  res.render('../views/loginUser')
})

// router.use('/', isLoggedIn)

module.exports = router;
