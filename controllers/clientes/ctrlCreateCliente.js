const { createCliente } = require('../../services/clientes/createCliente')

async function ctrlCreateCliente(req, res){
  try{
     const { name, lastName, phone,  genero, email } = req.body
     console.log('Hola desde controlador')
     const Cliente = await createCliente( {name, lastName, phone,genero, email})
     return res.status(200).send (Cliente)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlCreateCliente }
