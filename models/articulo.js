const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articuloSchema = new Schema({
  id:{require:true, type:String, unique: true},
  name: String,
  price: {type:Number},
  stock: {type:Number},
  picture: {type: String, default:''},

},{
  timestamps:true
}
)

const Articulo = mongoose.model('Articulo', articuloSchema)
module.exports = Articulo
