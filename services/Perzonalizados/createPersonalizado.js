const Personalizado =  require('../../models/personalizados')

async function createPersonalizado( {name, price, email} ){
  try{
    const personalizadoCreated = await Personalizado.create ({
      name,
      price,
      email
     })
      console.log(personalizadoCreated)
      return personalizadoCreated

  }catch(error){
    return {message: error.message}
  }
}
module.exports = {  createPersonalizado }
