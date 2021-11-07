const Personalizado =  require('../../models/personalizados')

async function createPersonalizado( {name, personalize, price} ){
  try{
    const personalizadoCreated = await Personalizado.create ({
      name,
      personalize,
      price
     })
      console.log(personalizadoCreated)
      return personalizadoCreated

  }catch(error){
    return {message: error.message}
  }
}
module.exports = {  createPersonalizado }
