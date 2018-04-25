const express = require('express')
const app = express();

app.set('view engine', 'ejs');



//router login
var routerLogin = require('./routes/login');
app.get('/login', routerLogin)

//router index
var routerindex = require('./routes');
app.get('/', routerindex)


app.listen(3000, () => console.log('app is listening on port 3000!'))
