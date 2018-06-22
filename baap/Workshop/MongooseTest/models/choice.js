const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Schema = require('mongoose').Schema

const ChoiceSchema = new Schema({
    name: String,
    choose_type : Boolean,
    howmany: Number,
    
},{
    timestamps : true
})

const CHSCHEM = mongoose.model('ChoiceSchema',ChoiceSchema)

module.exports = CHSCHEM