const Articulo =  require('../../models/articulo')

async function updateArticulo({_id ,name, price, stock}){
  try{
  console.log('Hola desde servico')
  console.log(_id)
  const ArticuloUpdate = await Articulo.findOneAndUpdate(
    {_id},
    {name,price,stock},
    { new: true }
   )
    console.log(ArticuloUpdate)
    return ArticuloUpdate
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { updateArticulo }
