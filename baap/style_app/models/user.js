const mongoose = require('mongoose')
const UserSchema = mongoose.Schema

const User = new UserSchema({
    name:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        unique: true
    },
    position:{
        type: String,
        unique: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', User);

