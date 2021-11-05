const { deleteCliente } = require('../../services/clientes/deleteCliente')

async function ctrlDeleteCliente(req, res){
  try{
     const { email } = req.params
     console.log('Hola desde controlador')
     const Cliente = await deleteCliente( { email})
     return res.status(200).send (Cliente)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlDeleteCliente }
