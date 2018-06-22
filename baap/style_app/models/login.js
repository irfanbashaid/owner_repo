var mongoose = require('mongoose')
var Schema = mongoose.Schema

var loginSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    }

},{
    timestamps : true
})

var Login = mongoose.model('login',loginSchema)

module.exports = Login