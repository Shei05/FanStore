const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ctrlSelectPersonalizado } = require('../controllers/personalizados/ctrlSelectPersonalizado')
const { ctrlUpdatePersonalizado } = require('../controllers/personalizados/ctrlUpdatePersonalizado')
const { ctrlCreatePersonalizado } = require('../controllers/personalizados/ctrlCreatePersonalizado')
const { ctrlDeletePersonalizado } = require('../controllers/personalizados/ctrlDeletePersonalizado')

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

router.get('/',
passport.authenticate ('jwt', {session:false}),
ctrlSelectPersonalizado
)

router.post('/',
passport.authenticate ('jwt', {session:false}),
ctrlCreatePersonalizado
)

router.put('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlUpdatePersonalizado
)

router.delete('/:email',
passport.authenticate ('jwt', {session:false}),
ctrlDeletePersonalizado
)

module.exports = router
