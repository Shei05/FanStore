const { createArticulo } = require('../../services/articulos/createArticulo')

async function ctrlCreateArticulo(req, res){
  try{
     const { name, price, stock } = req.body
     console.log('Hola desde controlador')
     const Articulo = await createArticulo( {name, price, stock})
     return res.status(200).send ( Articulo)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

}

module.exports = { ctrlCreateArticulo }
