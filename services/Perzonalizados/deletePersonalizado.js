const Personalizado =  require('../../models/personalizados')

async function  deletePersonalizado( { email} ){
  try{
 const personalizadoDeleted = await Personalizado.deleteOne({email})
  console.log(personalizadoDeleted)
  if(personalizadoDeleted.deletedCount == 0)
  return {personalizadoDeleted:personalizadoDeleted.deletedCount, message: 'Personalización no encontrado'}
  else return {personalizadoDeleted: personalizadoDeleted.deletedCount, message: 'Personalizado se ha eliminado'}
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { deletePersonalizado}
