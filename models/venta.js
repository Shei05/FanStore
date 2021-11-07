const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const ventaSchema = new Schema ({
  name: {type: String},
  status: {type: String, enum:['1', '2', '3', '4', '5'] , default:''},
  total: {type:Number},

}, {
  timestamps: true
})

const Venta= mongoose.model('Venta', ventaSchema)
module.exports = Venta
