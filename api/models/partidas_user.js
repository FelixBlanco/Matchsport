const mongoose = require('mongoose')
const Schema = mongoose.Schema

var partidasUserSchema = new Schema({  
  user_id   : String,   
  partidas_id   : String,           
  date      : Date
})

module.exports = new mongoose.model('partidas_user', partidasUserSchema)