const { selectArticulo } = require('../../services/articulos/selectArticulo')

async function ctrlSelectArticulo(req, res){
  try{
     const { genre } = req.query
     console.log('Hola desde controlador')
     const Articulos = await selectArticulo(genre)
     return res.status(200).send (Articulos)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlSelectArticulo }
