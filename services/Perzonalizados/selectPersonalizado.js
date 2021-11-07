const Personalizado =  require('../../models/personalizados')

async function selectPersonalizado(_id){
  try{
  console.log('Hola desde servico')
  console.log(_id)
  const Personalizados = !_id ? await Personalizado.find() : await Personalizado.find({_id})
  return Personalizados
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectPersonalizado }
