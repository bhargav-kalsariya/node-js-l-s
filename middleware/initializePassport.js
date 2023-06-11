const localStrategy = require('passport-local').Strategy
const signup = require('../models/signup')
exports.initializePassport = (passport) => {

    passport.use(new localStrategy(async (username, password, done) => {
        try {
            let user = await signup.findOne({ username });
            if (!user) return done(null, false);
            if (user.password !== password) return done(null, false);
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await signup.findById(id);
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    });
}