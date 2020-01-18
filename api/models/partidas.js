const mongoose = require('mongoose')
const Schema = mongoose.Schema

var partidasSchema = new Schema({  
  users_id : String,
  deporte_id : String,
  genero_id : String,
  fecha : String,
  hora_desde : String,
  hora_hasta : String,
  edad_min : String,
  edad_max : String,
  discapasidad : String,
  modalidad_juego : String,
  donde_sera : String,                
  date      : Date
})

module.exports = new mongoose.model('partidas', partidasSchema)