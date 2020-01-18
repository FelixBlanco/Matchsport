const mongoose = require('mongoose')
const Schema = mongoose.Schema

var discapacidadSchema = new Schema({  
  nombres   : String,    
  date      : Date
})

module.exports = new mongoose.model('discapacidades', discapacidadSchema)