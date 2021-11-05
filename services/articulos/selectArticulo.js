const Articulo =  require('../../models/articulo')

async function selectArticulo(genre){
  try{
  console.log('Hola desde servico')
  console.log(genre)
  const Articulos = !genre ? await Articulo.find() : await Articulo.find({genre})
  return Articulos
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectArticulo }
