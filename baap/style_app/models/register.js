const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

var RegisterSchema = new Schema({
    name :{
        type:String,
        unique: true
    },
    email :{
        type : String,
        unique: true
    },
    password:{
        type : String,
    }
},{
    timestamps : true
})



var Register = mongoose.model('Register',RegisterSchema)
module.exports = Register