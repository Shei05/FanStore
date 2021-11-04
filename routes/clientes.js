const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectCliente } = require('../controllers/clientes/ctrlSelectCliente')

router.get('/',
(req, res) =>{
  try{
      res.json({
        name: 'Carlos',
        lastname: 'Gonzalez',
        phone: '92101',
        genre: 'H',
        email: 'carlosG@gmail.com',
        password: '1234'
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }

})
router.get('/login',
passport.authenticate ('jwt', {session:false}),
ctrlSelectCliente
)
router.put('/login',
passport.authenticate ('jwt', {session:false}),
ctrlSelectCliente
)

router.delete('/login',
passport.authenticate ('jwt', {session:false}),
ctrlSelectCliente
)


module.exports = router
