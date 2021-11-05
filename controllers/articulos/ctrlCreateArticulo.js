const { createArticulo } = require('../../services/articulos/selectArticulo')

async function ctrlCreateArticulo(req, res){
  try{
     const { name, stock, price, promotion } = req.body
     console.log('Hola desde controlador')
     const Articulo = await createArticulo( {name, stock, price, promotion})
     return res.status(200).send ( Articulo)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlCreateArticulo }
