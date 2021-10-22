const express = require('express')
const passport = require('passport')
const router = express.Router()
const Venta = require ('../models/venta')

router.get('/', (req, res) =>{
  try{
    res.json ({
      status: 'venta realizada',
      idVenta: 1,
      totalPrince: 500,
    })
  }catch(error){
    console.log('Error: ${error}')
  }
})

router.get('/detalles',
 passport.authenticate ('jwt', {session:false}),
(req, res)=>{
 res.json(
   {
    status: 'venta realizada',
    idVenta: 1,
   })
})

module.exports = router
