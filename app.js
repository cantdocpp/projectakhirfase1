const express = require('express')
const app = express();

app.set('view engine', 'ejs');

//router home
var routerLogin = require('./routes/login');
app.get('/login', routerLogin)

app.listen(3000, () => console.log('app is listening on port 3000!'))
