const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectVenta } = require('../controllers/ventas/ctrlSelectVenta')
const { ctrlUpdateVenta } = require('../controllers/ventas/ctrlUpdateVenta')
const { ctrlCreateVenta } = require('../controllers/ventas/ctrlCreateVenta')
const { ctrlDeleteVenta } = require('../controllers/ventas/ctrlDeleteVenta')

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

router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectVenta
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreateVenta
)

router.put('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlUpdateVenta
)

router.delete('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlDeleteVenta
)

module.exports = router
