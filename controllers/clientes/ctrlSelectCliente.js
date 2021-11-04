const { selectCliente } = require('../../services/clientes/selectClientes')

async function ctrlSelectCliente(req, res){
  try{
     const { genre } = req.query
     console.log('Hola desde controlador')
     const Clientes = await selectCliente(genre)
     return res.status(200).send (Clientes)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlSelectCliente }
