var express = require('express');
var router = express.Router();
var Model = require('../models')

router.get('/', (req, res) => {
  res.render('../views/completionform')
})

router.post('/', (req, res) => {
  Model.Seller.update({
    name: req.body.name,
    address: req.body.address,
    telp: req.body.telp
  }, {
    where: {
      id: req.session.idSeller
    }
  })
  .then(function() {
    res.redirect('/home')
  })
})

module.exports = router
