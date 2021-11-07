const mongoose = require('mongoose')
const Schema = mongoose.Schema
const personalizadosSchema = new Schema({
  name: {type:String},
  personalize: {type:String},
  price: {type:Number},
},{
  timestamps:true
}
)

const Personalizados = mongoose.model('Personalizados', personalizadosSchema)
module.exports = Personalizados
