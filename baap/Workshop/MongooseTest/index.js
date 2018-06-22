const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const ChoiceSchema = require('./models/choice')

var database = mongoose.connect("mongodb://localhost:27017/WorkShop")
database.then((db) => {console.log("The server is connected succesfully") 
                var chocie = new ChoiceSchema({
                    name: "DiaryMilk",
                    choose_type: true,
                    howmany: 7

                })
                chocie.save().then((result) =>{
                    console.log(result)
                    return ChoiceSchema.find({}).exec()
                }).then(res => console.log(res))
                }).catch(err => console.log(err));


