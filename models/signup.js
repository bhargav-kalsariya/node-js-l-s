const mongoose = require('mongoose');
const signupSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})
let signup = mongoose.model('signup', signupSchema)
module.exports = signup