const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const RegSchema = new Schema({
    Firstname: {
        type: String,
       
    },
    Lastname:{
        type: String,
        
    },
    Username:{
        type: String,
       
    },
    Email:{
        type: String,
        
    },
    Password:{
        type: String,
       
    },
    Amount:{
        type: Number,
       
  }

},{
    timestamps : true
})

const Registration = mongoose.model('Registration',RegSchema)

module.exports = Registration