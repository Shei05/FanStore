const Articulo =  require('../../models/articulo')

async function createArticulo( {name, price, stock} ){
  try{
    const articuloCreated = await Articulo.create ({
      name,
      price,
      stock
     })
      console.log(articuloCreated)
      return articuloCreated

  }catch(error){
    return {message: error.message}
  }
}
module.exports = {  createArticulo }
