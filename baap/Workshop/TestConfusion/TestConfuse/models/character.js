const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = require('bluebird')

var CharacteSchema = new Schema({

    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number     

})

var Characters = mongoose.model('Character',CharacteSchema)

module.exports = Characters