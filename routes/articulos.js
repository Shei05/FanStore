const express = require('express')
const router = express.Router()
const Articulo = require('../models/articulo')

router.get('/', (req, res) =>{
  try{
      res.json({
        ip:'1',
        name: "Playera",
        price: 150,
        stock: 5,
    },{
        ip:'2',
        name: "sudadera",
        price: 300,
        stock: 4,
})
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

router.get('/filter', (req, res) =>{
  res.json(
{
  name: "Playera",
  price: 150
  })
})

module.exports = router
