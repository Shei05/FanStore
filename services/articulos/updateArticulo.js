const Articulo =  require('../../models/articulo')

async function selectArticulo(genre){
  try{
  console.log('Hola desde servico')
  console.log(genre)
  const ArticuloUpdate = await Articulo.findOneAndUpdate(
    {stock},
    {name, price},
    { new: true }
   )
    console.log(ArticuloUpdate)
    return ArticuloUpdate
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectArticulo }
