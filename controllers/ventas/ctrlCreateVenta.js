const { createVenta } = require('../../services/ventas')

async function ctrlCreateVenta(req, res){
  try{
     const { name, total } = req.body
     console.log('Hola desde controlador')
     const Venta = await createVenta( {name, total})
     return res.status(200).send (Venta)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlCreateVenta }
