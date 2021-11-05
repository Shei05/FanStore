const Personalizado =  require('../../models/personalizados')

async function selectPersonalizado(genre){
  try{
  console.log('Hola desde servico')
  console.log(genre)
  const Personalizados = !genre ? await Personalizado.find() : await Personalizado.find({genre})
  return Personalizados
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectPersonalizado }
