const Ventas =  require('../../models/venta')

async function selectVenta(_id){
  try{
  console.log('Hola desde servico')
  console.log(_id)
  const venta = !_id ? await Ventas.find() : await Ventas.find({_id})
  return venta
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectVenta }
