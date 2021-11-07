const Cliente =  require('../../models/clientes')

async function  createCliente( {name, lastName, phone, genero, email} ){
  try{
 const clienteCreated = await Cliente.create ({
  name,
  lastName,
  phone,
  genre: genero,
  email
 })
  console.log(clienteCreated)
  return clienteCreated
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { createCliente }
