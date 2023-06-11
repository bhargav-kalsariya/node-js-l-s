const { Router } = require('express');
const signup = require('../models/signup');
const { signcontrol, logincontrol } = require('../controller/signControl');
const router = Router();

router.get('/', async(req, res) => {
    res.render('index')
    let getdata =await signup.find()
    console.log(getdata);
})
router.get('/signup', (req, res) => {
    res.render('signup')
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/signup', signcontrol)
router.post('/login', logincontrol)

module.exports = router