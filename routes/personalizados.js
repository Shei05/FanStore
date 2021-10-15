const express = require('express')
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
module.exports = router
