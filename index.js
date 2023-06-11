const connect = require('./config/connect')
const express = require('express')
const signup = require('./models/signup')
const router = require('./router/route')
const passport = require('passport')
const { initializePassport } = require('./middleware/initializePassport')
const expresssession = require('express-session')

let app = express();

initializePassport(passport);
app.use(expresssession({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('views' + __dirname + 'views')
app.set('view engine', 'ejs')
connect();

app.use('/', router)

app.listen(5678, () => {
    console.log('listening on port 5678')
})