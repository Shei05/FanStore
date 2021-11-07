const { updatePersonalizado } = require('../../services/Perzonalizados/updatePersonalizado')

async function ctrlUpdatePersonalizado(req, res){
  try{
     const { name, personalize, price  } = req.body
     const { _id } = req.params
     console.log('Hola desde controlador')
     const Personalizado = await updatePersonalizado( {_id ,name, personalize, price})
     return res.status(200).send (Personalizado)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlUpdatePersonalizado }
