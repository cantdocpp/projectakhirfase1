var express = require('express');
var router = express.Router();
const Model = require('../models');

router.get('/login/seller', (req, res) => {
    console.log('================',req);
  Model.Seller.findOne({

      //where: {email: req.body.email}
    })
    .then(seller=>{
      console.log('================',seller);
      res.render('../views/completionform',{Seller})
    })
  // res.render('../views/completionform')
  })

router.post('completionform/add', (req, res) => {
  console.log('masuk sini jing');
  Model.Seller.update({
    name: req.body.name,
    address: req.body.address,
    telp: req.body.telp
  }, {
    where: {
      email: req.body.email
    }
  })
  .then(function() {
    res.send('tes')
  })

})

module.exports = router
