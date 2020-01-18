const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({  
  nombres    : String,    
  apellidos  : String, 
  fecha_n    : String, 
  telefono   : String, 
  coordenada_direccion  : String, 
  date : Date
})

module.exports = new mongoose.model('users', userSchema)