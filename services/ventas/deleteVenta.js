const Venta =  require('../../models/venta')

async function  deleteVenta( _id ){
  try{
 const ventaDeleted = await Venta.deleteOne({_id})
  console.log( ventaDeleted)
  if( ventaDeleted.deletedCount == 0)
  return { ventaDeleted: ventaDeleted.deletedCount, message: 'Venta no existente'}
  else return {ventaDeleted: ventaDeleted.deletedCount, message: 'Venta eliminada'}
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { deleteVenta }
