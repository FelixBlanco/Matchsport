const mongoose = require('mongoose')
const Schema = mongoose.Schema

var modalidadJuegoSchema = new Schema({  
  modalidad   : String,       
  date      : Date
})

module.exports = new mongoose.model('modalidad_juego', modalidadJuegoSchema)