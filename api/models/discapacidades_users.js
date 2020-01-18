const mongoose = require('mongoose')
const Schema = mongoose.Schema

var discapacidadUserSchema = new Schema({  
  user_id   : String,    
  discapacidad_id       : String,    
  date      : Date
})

module.exports = new mongoose.model('discapacidad_users', discapacidadUserSchema)