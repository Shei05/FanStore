const Cliente =  require('../../models/clientes')

async function selectCliente(genre){
  try{
  console.log('Hola desde servico')
  console.log(genre)
  const cliente = !genre ? await Cliente.find() : await Cliente.find({genre})
  return cliente
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectCliente }
