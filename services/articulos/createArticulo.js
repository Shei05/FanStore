const Articulo =  require('../../models/articulo')

async function createArticulo( {name, price, stock, promition} ){
  try{
    const articuloCreated = await Articulo.create ({
      name,
      price,
      stock,
      promition
     })
      console.log(articuloCreated)
      return articuloCreated

  }catch(error){
    return {message: error.message}
  }
}
module.exports = {  createArticulo }
