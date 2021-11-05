const Cliente =  require('../../models/clientes')

async function  updateCliente( {name, lastName, email} ){
  try{
  console.log('Hola desde servico')
  console.log(email)
 const clienteUpdate = await Cliente.findOneAndUpdate(
  {email},
  {name, lastName},
  { new: true }
 )
  console.log(clienteUpdate)
  return clienteUpdate
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { updateCliente }
