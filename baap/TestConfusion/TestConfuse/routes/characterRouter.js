const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const character = ('../models/character')

const characterRouter = express.Router()
characterRouter.use(bodyParser.json())


.get((req,res,next) =>{
        character.find({}).then((char) =>{
            console.log("The character is created")
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(char);
        }).catch((error) => {console.log(error)})
})
.post((req,res,next) =>{
    const charcterx = new character({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
      });

      charcterx.save().then((result) =>{
          console.log(result)
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(char);
        }).catch(err => console.log(err))
})

module.exports = characterRouter