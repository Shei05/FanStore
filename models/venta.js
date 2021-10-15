const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const ventaSchema = new Schema ({
  status: {type: String},
  idVenta: {type:Number},
  totalPrince: {type:Number},
  actualUsuario: [{type: Schema.Types.ObjectId, ref:'usuario'}],
  actualArticulo: [{type: Schema.Types.ObjectId, ref:'articulo'}],
}, {
  timestamps: true
})

const Venta= mongoose.model('Venta', ventaSchema)
module,exports = Venta
