var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('../views/login')
})

router.get('/seller', (req, res) => {
  res.render('../views/loginSeller');
})

router.post('/seller', (req, res) => {

})

module.exports = router;
