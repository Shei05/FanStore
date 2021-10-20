const passport = require('passaport')
const LocalStrategy = require ('./strategies/local.trategy')

passport.use(LocalStrategy)

module.exports = passport
