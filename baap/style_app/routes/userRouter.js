const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();
const Users = require('../models/user')


userRouter.use(bodyParser.json());

userRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    console.log('You are now using GET Request function');
    Users.find({}).then((users)=>{
        res.setHeader('Content-Type','application/json')
        res.statusCode = 200
        res.json(users)
        
    },(err) => next(err))
    .catch((err) => next(err))
})
.post((req, res, next) => {
    Users.create(req.body).then((details) =>{
        res.statusCode = 200
        res.setHeader('Content-Type','application/json')
        res.json(details)
    },(err) => next(err)).catch((err) => next(err))
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete((req, res, next) => {
   Users.remove({}).then((details) => {
       res.statusCode = 200
       res.setHeader('Content-type','application/json')
       res.json(details)
   },(err) => next(err)).catch((err) => next(err))
});



module.exports = userRouter;