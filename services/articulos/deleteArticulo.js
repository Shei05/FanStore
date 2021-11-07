const Articulo =  require('../../models/articulo')

async function  deleteArticulo( _id ){
  try{
 const articuloDeleted = await Articulo.deleteOne({_id})
  console.log(articuloDeleted)
  if(articuloDeleted.deletedCount == 0)
  return {articuloDeleted: articuloDeleted.deletedCount, message: 'Articulo no encontrado'}
  else return {articuloDeleted: articuloDeleted.deletedCount, message: 'Articulo eliminado'}
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { deleteArticulo }
