const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const RegSchema = new Schema({
    Firstname: {
        type: String,
        //required: true
    },
    Lastname:{
        type: String,
        //required: true
    },
    Username:{
        type: String,
       // required: true
    },
    Email:{
        type: String,
        //required: true
    },
    Password:{
        type: String,
        //required: true
    },
    Amount:{
        type: Number,
        //required: true
  }

},{
    timestamps : true
})

const Registration = mongoose.model('Registration',RegSchema)

module.exports = Registration