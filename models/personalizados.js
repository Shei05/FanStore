const mongoose = require('mongoose')
const Schema = mongoose.Schema
const personalizadosSchema = new Schema({
  id:{require:true, type:String, unique: true},
  name: String,
  personalize: String,
  price: {type:Number},
},{
  timestamps:true
}
)

const Personalizados = mongoose.model('Personalizados', personalizadosSchema)
module.exports = Personalizados
