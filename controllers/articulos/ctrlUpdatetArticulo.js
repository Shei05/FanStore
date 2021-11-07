const { updateArticulo } = require('../../services/articulos/updateArticulo')

async function ctrlUpdateArticulo(req, res){
  try{
    const { name, price, stock } = req.body
    const { _id } = req.params
    console.log('Hola desde controlador')
    const Articulo = await updateArticulo( {_id ,name, price, stock})
    return res.status(200).send (Articulo)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

}

module.exports = { ctrlUpdateArticulo }
