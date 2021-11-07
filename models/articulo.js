const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articuloSchema = new Schema({
  name: {type: String},
  price: {type:Number},
  stock: {type: String}

},{
  timestamps:true
}
)

const Articulo = mongoose.model('Articulo', articuloSchema)
module.exports = Articulo
