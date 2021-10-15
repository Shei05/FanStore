const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema({
  name: String,
  lastName: { type: String, default: '' },
  phone: { type: String, default: '' },
  genre: { type: String, enum:['H', 'M', 'U'] , default: 'U' },
  picture: { type: String, default: 'https://e7.pngegg.com/pngimages/280/990/png-clipart-computer-icons-user-multiple-miscellaneous-black.png' },
  email:{require:true, type: String, lowercase:true, trim: true, unique: true},
},{
  timestamps: true
})
const Cliente = mongoose.model('Cliente', clienteSchema)
module.exports = Cliente

