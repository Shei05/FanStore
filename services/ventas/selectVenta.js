const Venta =  require('../../models/venta')

async function selectVenta(genre){
  try{
  console.log('Hola desde servico')
  console.log(genre)
  const venta = !genre ? await Venta.find() : await Venta.find({genre})
  return venta
  }catch(error){
    return {message: error.message}
  }
}
module.exports = { selectVenta }
