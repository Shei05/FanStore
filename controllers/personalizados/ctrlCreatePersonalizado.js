const { createPersonalizado } = require('../../services/Perzonalizados/createPersonalizado')

async function ctrlCreatePersonalizado(req, res){
  try{
     const { name, price, email } = req.body
     console.log('Hola desde controlador')
     const Personalizado = await createPersonalizado( {name, price, email})
     return res.status(200).send ( Personalizado)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlCreatePersonalizado }
