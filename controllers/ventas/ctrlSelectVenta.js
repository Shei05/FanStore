const { selectVenta } = require('../../services/clientes/selectCliente')

async function ctrlSelectVenta(req, res){
  try{
     const { genre } = req.query
     console.log('Hola desde controlador')
     const Venta = await selectVenta(genre)
     return res.status(200).send (Venta)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlSelectVenta }
