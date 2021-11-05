const Venta =  require('../../models/venta')

async function  updateVenta( {name, total} ){
  try{
  console.log('Hola desde servico')
 const VentaUpdate = await Venta.findOneAndUpdate(
  {name, total},
  { new: true }
 )
  console.log(VentaUpdate)
  return VentaUpdate
  }catch(error){
    return {message: error.message}
  }
}
module.exports = {  updateVenta }
