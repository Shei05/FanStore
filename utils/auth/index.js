const passport = require('passport')
const LocalStrategy = require ('./strategies/local.trategy')
const JwtStrategy = require('./strategies/jwt.trategy')

passport.use(LocalStrategy)
passport.use(JwtStrategy)

module.exports = passport
