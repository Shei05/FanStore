const Clientes =  require('../../models/clientes')

async function selectCliente(genre){
  try{
  console.log('Hola desde servico')
  console.log(genre)
  // let cliente
  // if (!genre) {
  //   cliente = await Clientes.find()
  // }
  // else{
  //   cliente = await Clientes.find({genre})
  // }
  const cliente = !genre ? await Clientes.find() : await Clientes.find({ganre})
  return cliente
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectCliente }
