const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectArticulo } = require('../controllers/articulos/ctrlSelectArticulo')
const { ctrlUpdateArticulo } = require('../controllers/articulos/ctrlUpdatetArticulo')
const { ctrlCreateArticulo } = require('../controllers/articulos/ctrlCreateArticulo')
const { ctrlDeleteArticulo} = require('../controllers/articulos/ctrlDeleteArticulo')


router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectArticulo
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreateArticulo
)

router.put('/:_id',
passport.authenticate ('jwt', {session:false}),
ctrlUpdateArticulo
)

router.delete('/:_id',
passport.authenticate ('jwt', {session:false}),
ctrlDeleteArticulo
)

module.exports = router
