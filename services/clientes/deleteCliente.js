const Cliente =  require('../../models/clientes')

async function  deleteCliente( { email} ){
  try{
 const clienteDeleted = await Cliente.deleteOne({email})
  console.log(clienteDeleted)
  if(clienteDeleted.deletedCount == 0)
  return {clienteDeleted: clienteDeleted.deletedCount, message: 'Cliente no existente'}
  else return {clienteDeleted: clienteDeleted.deletedCount, message: 'Cliente eliminado'}
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { deleteCliente }
