const Venta =  require('../../models/venta')

async function  deleteVenta( { email} ){
  try{
 const ventaDeleted = await Venta.deleteOne({email})
  console.log( ventaDeleted)
  if( ventaDeleted.deletedCount == 0)
  return { ventaDeleted: ventaDeleted.deletedCount, message: 'Venta no existente'}
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { deleteVenta }
