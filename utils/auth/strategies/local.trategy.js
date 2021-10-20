const { Strategy } = require('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy = new Strategy(
    async (email, password, done) =>{
      try{
        const usersTest = [
          {name: 'Irving', email: 'user1@email.com', password: '$2b$10$jBRaall0qjvJpTraHl29mu0kXbnR7Fn9g7Hk5MtVByKsQsL3RcCWC', rol: 'user'},
          {name: 'Diana', email: 'admin@email.com', password: '$2b$10$nHPlbC8yf4CMEPadqPuU7O061vgkl.MrP2TaYdSLxhIZSBz6ka3xi', rol: 'admin'},
          {name: 'Alfonso', email: 'user2@email.com', password: '$2b$10$HGTFbet629g9Uut4Esf68Oo3WpQKjYlUaN3bdxj1LaVyDKjh/IBCy', rol: 'user'},
        ]
        const user = usersTest[1]
        if(!user) return done(null,null)
        console.log(user)
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) throw { status: 401, message: 'No valido', error: true}
        done(null, user)
      } catch(error){
        done(error, false)
      }
    }
)

module.exports = LocalStrategy
