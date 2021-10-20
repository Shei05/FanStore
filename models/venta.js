const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const ventaSchema = new Schema ({
  status: {type: String, enum:['1', '2', '3', '4', '5'] , default:''},
  idVenta: {type:Number},
  totalPrince: {type:Number},

}, {
  timestamps: true
})

const Venta= mongoose.model('Venta', ventaSchema)
module,exports = Venta
