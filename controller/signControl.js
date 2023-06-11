const signup = require('../models/signup')
const passport = require('passport')

let signcontrol = async (req, res) => {
    let user = await signup.findOne({ username: req.body.username })
    if (user) return res.status(400).send('user already exists')
    let newUser = await signup.create(req.body)
    console.log(newUser)
    res.status(201).render('index')
}
let logincontrol = passport.authenticate('local', { failureRedirect: '/signup', successRedirect: '/' })
module.exports = { signcontrol, logincontrol }