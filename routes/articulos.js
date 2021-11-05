const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectArticulo } = require('../controllers/articulos/ctrlSelectArticulo')
const { ctrlUpdateArticulo } = require('../controllers/articulos/ctrlUpdatetArticulo')
const { ctrlCreateArticulo } = require('../controllers/articulos/ctrlCreateArticulo')
const { ctrlDeleteArticulo} = require('../controllers/articulos/ctrlDeleteArticulo')

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

router.get('/filter',
passport.authenticate ('jwt', {session:false}),
(req, res) =>{
  res.json(
{
  name: "Playera",
  price: 150
  })
})

router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectArticulo
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreateArticulo
)

router.put('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlUpdateArticulo
)

router.delete('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlDeleteArticulo
)

module.exports = router
