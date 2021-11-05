const { updateArticulo } = require('../../services/articulos/selectArticulo')

async function ctrlUpdateArticulo(req, res){
  try{
    const { name, price, stock, promotion } = req.body
    const { stock } = req.params
    console.log('Hola desde controlador')
    const Articulo = await updateArticulo( {name, price,stock, promotion})
    return res.status(200).send (Articulo)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlUpdateArticulo }
