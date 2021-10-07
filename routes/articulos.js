const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
  res.json([
{
  name: "Playera",
  price: 150
},
{
  name: "sudadera",
  price: 300
}
  ])
})

router.get('/filter', (req, res) =>{
  res.json(
{
  name: "Playera",
  price: 150
  })
})

module.exports = router
