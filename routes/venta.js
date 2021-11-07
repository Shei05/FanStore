const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectVenta } = require('../controllers/ventas/ctrlSelectVenta')
const { ctrlUpdateVenta } = require('../controllers/ventas/ctrlUpdateVenta')
const { ctrlCreateVenta } = require('../controllers/ventas/ctrlCreateVenta')
const { ctrlDeleteVenta } = require('../controllers/ventas/ctrlDeleteVenta')


router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectVenta
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreateVenta
)

router.put('/:_id',
passport.authenticate ('jwt', {session:false}),
ctrlUpdateVenta
)

router.delete('/:_id',
passport.authenticate ('jwt', {session:false}),
ctrlDeleteVenta
)

module.exports = router
