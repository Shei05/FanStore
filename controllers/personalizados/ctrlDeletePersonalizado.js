const { deletePersonalizado } = require('../../services/Perzonalizados/deletePersonalizado')

async function ctrlDeletePersonalizado(req, res){
  try{
     const { email } = req.params
     console.log('Hola desde controlador')
     const Personalizado = await deletePersonalizado( { email})
     return res.status(200).send (Personalizado)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlDeletePersonalizado }
