const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const express = require('express')
const morgan = require('morgan')
const ChoiceSchema = require('./models/registration')



var database = mongoose.connect("mongodb://localhost:27017/WorkShop")
database.then((db) => {console.log("The server is connected succesfully") 
                var chocie = new ChoiceSchema({
                    Firstname: "Arumugam",
                    Lastname: "fetrix",
                    Username:"fedidos",
                    Email:"sixface0321@gmail.com",
                    Password:"optimus0072020"
                    })
                chocie.save().then((result) =>{
                    console.log(result)
                    return ChoiceSchema.find({}).exec()
                }).then(res => console.log(res))
                }).catch(err => console.log(err));