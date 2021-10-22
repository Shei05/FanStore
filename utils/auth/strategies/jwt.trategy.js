const {Strategy, ExtractJwt} = require('passport-jwt')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: '2AZkJo1fmB5KLphjvcutxCsH3970rbnN'
}

const JwtStrategy = new Strategy(options,(payload, done)=>{
  return done(null, payload)
})

module.exports = JwtStrategy
