const Articulo =  require('../../models/articulo')

async function selectArticulo(_id){
  try{
  console.log('Hola desde servico')
  console.log(_id)
  const Articulos = !_id ? await Articulo.find() : await Articulo.find({_id})
  return Articulos
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectArticulo }
