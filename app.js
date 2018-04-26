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

//register
var routerregister = require('./routes/register');
app.use('/register', authMiddleware, routerregister);

//router login
var routerLogin = require('./routes/login');
app.use('/login', authMiddleware, routerLogin);

// app.use('/login',authMiddleware)

//router index
var routerIndex = require('./routes');
app.use('/', routerIndex);


app.listen(3000, () => console.log('app is listening on port 3000!'))
