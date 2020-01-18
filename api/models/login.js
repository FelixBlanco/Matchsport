const mongoose = require('mongoose')
const Schema = mongoose.Schema

var loginSchema = new Schema({  
  email     : String,  
  password  : String,
  date      : Date
})

module.exports = new mongoose.model('logins', loginSchema)