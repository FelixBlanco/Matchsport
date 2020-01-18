const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserDeporteSchema = new Schema({  
  user_id   : String,    
  deporte_id : String,    
  date      : Date
})

module.exports = new mongoose.model('user_deportes', UserDeporteSchema)