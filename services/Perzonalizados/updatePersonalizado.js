const Personalizados =  require('../../models/personalizados')

async function  updatePersonalizado( {_id, name, personalize, price} ){
  try{
  console.log('Hola desde servico')
 const personalizadoUpdate = await Personalizados.findOneAndUpdate(
  {_id},
  {name, personalize, price},
  { new: true }
 )
  console.log(personalizadoUpdate)
  return personalizadoUpdate
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { updatePersonalizado }
