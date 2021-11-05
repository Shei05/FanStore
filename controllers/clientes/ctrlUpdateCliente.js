const { updateCliente } = require('../../services/clientes/updateCliente')

async function ctrlUpdateCliente(req, res){
  try{
     const { name, lastName } = req.body
     const { email } = req.params
     console.log('Hola desde controlador')
     const Cliente = await updateCliente( {name, lastName, email})
     return res.status(200).send (Cliente)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlUpdateCliente }
