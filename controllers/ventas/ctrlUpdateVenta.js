const { updateVenta } = require('../../services/ventas/updateVenta')

async function ctrlUpdateVenta(req, res){
  try{
     const { name, total } = req.body
     const { total} = req.params
     console.log('Hola desde controlador')
     const Venta = await updateVenta( {name, total})
     return res.status(200).send (Venta)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlUpdateVenta }
