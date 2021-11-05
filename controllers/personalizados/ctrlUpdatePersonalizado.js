const { updatePersonalizado } = require('../../services/Perzonalizados/updatePersonalizado')

async function ctrlUpdatePersonalizado(req, res){
  try{
     const { name, email, price  } = req.body
     const { email } = req.params
     console.log('Hola desde controlador')
     const Personalizado = await updatePersonalizado( {name, email, price})
     return res.status(200).send (Personalizado)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlUpdatePersonalizado }
