const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Registration = require('../models/registration')


const registerRouter = express.Router()

registerRouter.use(bodyParser.json())

registerRouter.route('/')
.all((req,res,next) => {
    res.setHeader('Content-Type','application/json')
    res.statusCode = 200
    next()
})
.get((req,res,next) =>{
    Registration.find({}).then((details) =>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json(details);
    },(err) => next(err)).catch((err) => next(err));

})
.post((req, res, next) => {
    Registration.create(req.body)
    .then((details) => {
        console.log('Deatails Created ', details);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(details);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
    res.end('PUT operation not supported ');
})
.delete((req, res, next) => {
   Registration.remove({})
    .then((details) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(details);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

module.exports = registerRouter