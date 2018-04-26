const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var session = require('express-session')
const authMiddleware = require('./middlewares/authMiddleware');

app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// app.locals.isLoggedIn = require('./helpers/checkIsLogin');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//router register
var routerRegister = require('./routes/register');
app.use('/register', authMiddleware, routerRegister);

//router login
var routerLogin = require('./routes/login');
app.use('/login', authMiddleware, routerLogin);

//router index
var routerIndex = require('./routes');
app.use('/', routerIndex);

//route home
var routeHome = require('./routes/home');
app.use('/home', routeHome);

//route user
var routeSeller = require('./routes/seller');
app.use('/seller', routeSeller);

//route completion form
var completionForm = require('./routes/completionForm');
app.use('/completionform', completionForm);



app.listen(3000, () => console.log('app is listening on port 3000!'))
