const { selectArticulo } = require('../../services/articulos/selectArticulo')

async function ctrlSelectArticulo(req, res){
  try{
     const { _id } = req.query
     console.log('Hola desde controlador')
     const Articulos = await selectArticulo(_id)
     return res.status(200).send (Articulos)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

}

module.exports = { ctrlSelectArticulo }
