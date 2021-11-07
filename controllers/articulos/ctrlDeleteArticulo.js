const { deleteArticulo } = require('../../services/articulos/deleteArticulo')

async function ctrlDeleteArticulo(req, res){
  try{
     const { _id } = req.params
     console.log('Hola desde controlador')
     const Articulo = await deleteArticulo( { _id})
     return res.status(200).send (Articulo)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

}

module.exports = { ctrlDeleteArticulo }
