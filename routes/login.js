var express = require('express');
var router = express.Router();
var Model = require('../models')
var bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  console.log(req.session.email);
  res.render('../views/login/login');
})

router.get('/seller', (req, res) => {
  res.render('../views/login/loginSeller');
})

router.post('/seller', (req, res) => {
  Model.Seller.findOne({
    where: {email: req.body.email}
  })
  .then(dataSeller => {
    let password = dataSeller.password;
    if (bcrypt.compareSync(req.body.password, password)) {
      req.session.email = dataSeller.email;
      req.session.idSeller = dataSeller.id;
      if(dataSeller.name === 0) {
        res.redirect('/completionform')
      } else {
        res.redirect('/home')
      }
    }
  })
})

router.get('/user', (req, res) => {
  res.render('../views/login/loginUser')
})

router.post('/user', (req, res) => {
  Model.User.findOne({
    where: {email: req.body.email}
  })
  .then(dataUser => {
    console.log('_______________________', dataUser);
    var password = dataUser.password;
    if (bcrypt.compareSync(req.body.password, password)) {
      req.session.email = dataUser.email
      req.session.nomorId = dataUser.id;
      if (dataUser.name === null) {
        res.redirect('/completionform');
      } else {
        res.redirect('/home')
      }
    }
  })
  .catch(function(err) {
    console.log(err);
  })
})

// router.use('/', isLoggedIn)

module.exports = router;
