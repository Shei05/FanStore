const Venta =  require('../../models/venta')

async function  updateVenta( {_id, name, status,  total} ){
  try{
  console.log('Hola desde servico')
 const VentaUpdate = await Venta.findOneAndUpdate(
   {_id},
   {name, status, total},
  { new: true }
 )
  console.log(VentaUpdate)
  return VentaUpdate
  }catch(error){
    return {message: error.message}
  }
}
module.exports = {  updateVenta }
