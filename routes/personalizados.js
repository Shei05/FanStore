const express = require('express')
const passport = require('passport')
const router = express.Router()
const Personalizados = require('../models/personalizados')

router.get('/', (req, res) =>{
  try{
      res.json({
        ip:'1',
        name: "Sudadera estampada de Lisa blackpink",
        price: 600,
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

router.get('/especificaciones',
passport.authenticate ('jwt', {session:false}),
(req, res) =>{
  res.json(
{
  name: "Sudadera estampada de Lisa blackpink"
  })
})

module.exports = router
