var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log(req.session.email);
  res.render('index')
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})

module.exports = router
