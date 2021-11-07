const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectCliente } = require('../controllers/clientes/ctrlSelectCliente')
const { ctrlUpdateCliente } = require('../controllers/clientes/ctrlUpdateCliente')
const { ctrlCreateCliente } = require('../controllers/clientes/ctrlCreateCliente')
const { ctrlDeleteCliente } = require('../controllers/clientes/ctrlDeleteCliente')


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
