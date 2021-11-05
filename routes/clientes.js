const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectCliente } = require('../controllers/clientes/ctrlSelectCliente')
const { ctrlUpdateCliente } = require('../controllers/clientes/ctrlUpdateCliente')
const { ctrlCreateCliente } = require('../controllers/clientes/ctrlCreateCliente')
const { ctrlDeleteCliente } = require('../controllers/clientes/ctrlDeleteCliente')

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
router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectCliente
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreateCliente
)

router.put('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlUpdateCliente
)

router.delete('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlDeleteCliente
)


module.exports = router
