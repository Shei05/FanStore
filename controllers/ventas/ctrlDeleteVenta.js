const { deleteVenta } = require('../../services/ventas/deleteVenta')

async function ctrlDeleteVenta(req, res){
  try{
     const { _id } = req.params
     console.log('Hola desde controlador')
     const Venta = await deleteVenta(_id)
     return res.status(200).send(Venta)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlDeleteVenta }
