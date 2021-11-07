const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectPersonalizado } = require('../controllers/personalizados/ctrlSelectPersonalizado')
const { ctrlUpdatePersonalizado } = require('../controllers/personalizados/ctrlUpdatePersonalizado')
const { ctrlCreatePersonalizado } = require('../controllers/personalizados/ctrlCreatePersonalizado')
const { ctrlDeletePersonalizado } = require('../controllers/personalizados/ctrlDeletePersonalizado')


router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectPersonalizado
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreatePersonalizado
)

router.put('/:_id',
passport.authenticate ('jwt', {session:false}),
ctrlUpdatePersonalizado
)

router.delete('/:_id',
passport.authenticate ('jwt', {session:false}),
ctrlDeletePersonalizado
)

module.exports = router
