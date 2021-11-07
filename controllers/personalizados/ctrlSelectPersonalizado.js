const { selectPersonalizado } = require('../../services/Perzonalizados/selectPersonalizado')

async function ctrlSelectPersonalizado(req, res){
  try{
     const {_id } = req.query
     console.log('Hola desde controlador')
     const Personalizados = await selectPersonalizado (_id)
     return res.status(200).send (Personalizados)
  }catch(error){
    return res.status(error.status || 500).send({messege: error.massege})
  }

     //return res.status(200).send({ genero: genre == 'M'? '  Femenino': 'Masculino' })//
}

module.exports = { ctrlSelectPersonalizado }
