const mongoose = require('mongoose')
const Schema = mongoose.Schema

var generosSchema = new Schema({  
  nombres     : String,    
  date      : Date
})

module.exports = new mongoose.model('generos', generosSchema)