const passport = require('passport')
const LocalStrategy = require ('./strategies/local.trategy')

passport.use(LocalStrategy)

module.exports = passport
