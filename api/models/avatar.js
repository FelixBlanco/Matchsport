const mongoose = require('mongoose')
const Schema = mongoose.Schema

var avatarSchema = new Schema({  
  user_id   : String,    
  url       : String,    
  date      : Date
})

module.exports = new mongoose.model('avatar', avatarSchema)