var express = require('express');
var router = express.Router();
var Model = require('../models')


router.get('/', (req, res) => {
  res.render('../views/register/register');
})

// router.get('/seller', (req, res) => {
//   res.render('../views/registerseller');
// })

router.post('/', (req, res) => {
  console.log(req.body.Status);
    if(req.body.Status === "seller"){
      Model.Seller.create({
        email: req.body.email,
        password: req.body.password,
        Status: req.body.Status
      })
      .then(function() {
        res.redirect('/')
      })
    } else{
      Model.User.create({
        email: req.body.email,
        password: req.body.password,
        Status: req.body.Status
      })
      .then(function(){
        res.redirect('/')
      })
    }
})




module.exports = router;
