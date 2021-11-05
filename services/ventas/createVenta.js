const Venta=  require('../../models/venta')

async function  createVenta( {name, total} ){
  try{
 const ventaCreated = await Venta.create ({
  name,
  total
 })
  console.log(ventaCreated)
  return ventaCreated
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { createVenta }
