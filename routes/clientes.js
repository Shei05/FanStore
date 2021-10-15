const express = require('express')
const router = express.Router()
const Cliente = require('../models/clientes')

router.get('/', (req, res) =>{
  try{
      res.json({
        name: 'Carlos',
        lastname: 'Gonzalez',
        phone: '92101',
        genre: 'H',
        email: 'carlosG@gmail.com',
    },{
        name: 'Sheila',
        lastname: 'Montero',
        phone: '92102',
        genre: 'M',
        email: 'sheilaM@gmail.com',
})
  }catch(error){
    console.log(`Error: ${error}`)
  }
})


module.exports = router
