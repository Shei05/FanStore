const { deleteArticulo } = require('../../services/articulos/deleteArticulo')

async function ctrlDeleteArticulo(req, res){
  try{
     const { email } = req.params
     console.log('Hola desde controlador')
     const Articulo = await deleteArticulo( { email})
     return res.status(200).send (Articulo)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlDeleteArticulo }
