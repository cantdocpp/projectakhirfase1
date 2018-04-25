const express = require('express')
const app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//router index
var routerIndex = require('./routes');
app.use('/', routerIndex);

//router login
var routerLogin = require('./routes/login');
app.use('/login', routerLogin);


app.listen(3000, () => console.log('app is listening on port 3000!'))
