const Venta=  require('../../models/venta')

async function  createVenta( {name, status, total} ){
  try{
 const ventaCreated = await Venta.create ({
  name,
  status,
  total
 })
  console.log(ventaCreated)
  return ventaCreated
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { createVenta }
