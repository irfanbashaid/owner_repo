const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')

const userRegRouter = express.Router();
const Register = require('../models/register')

userRegRouter.use(bodyParser.json());

userRegRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    console.log('You are now using GET Request function');
    Register.find({}).then((users)=>{
        res.setHeader('Content-Type','application/json')
        res.statusCode = 200
        res.json(users)
        
    },(err) => next(err))
    .catch((err) => next(err))
})
.post((req, res, next) => {
        if( (req.body.name != null) && (req.body.password != null)){
            bcrypt.genSalt(10,(err,salt) =>{
                bcrypt.hash(req.body.password,salt,null,(err,hash) =>{
                    if(err){
                        return next(err)
                    }
                    else{
                       var data = {
                           name : req.body.name,
                           email: req.body.email,
                           password : hash
                        }
                        Register.create(data).then((details) =>{
                            res.statusCode = 200;
                            res.setHeader('Content-Type','application/json')
                            res.json(details)
                        },(err) => next(err)).catch((err) => next(err))
                    }
                })
            })
        }
        else{
            res.send("Please enter the vaild name and password")
        }
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete((req, res, next) => {
    Register.remove({}).then((details) => {
       res.statusCode = 200
       res.setHeader('Content-type','application/json')
       res.json(details)
   },(err) => next(err)).catch((err) => next(err))
});



module.exports = userRegRouter;
