const mongoose = require('mongoose')
const Schema = mongoose.Schema

var rolSchema = new Schema({  
  nombres   : String,    
  date      : Date
})

module.exports = new mongoose.model('roles', rolSchema)