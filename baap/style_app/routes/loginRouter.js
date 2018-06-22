const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')

const userloginRouter = express.Router();
const Login = require('../models/login')

userloginRouter.use(bodyParser.json());

userloginRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
        res.setHeader('Content-type','application/json')
        res.statusCode = 200;
        res.json("You are using the GET function")
    })
.post((req, res, next) => {
        var password = req.body.password
    Login.findOne({'email': req.body.email},'name email password' ,(err,person) =>{
       

        res.json(person)
       /* bcrypt.compare(password, person.password, (err,resp) =>{
            if(err) {
                return next(err)
            }
            else{
                if(resp === true){
                    res.setHeader('Content-Type','application/json')
                    res.statusCode = 200;
                    res.json("you are successfully logged")
                }
            }
            
            

        })*/
    },(err) => next(err)).catch((err) => next(err))
        
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete((req, res, next) => {
    Login.remove({}).then((details) => {
       res.statusCode = 200
       res.setHeader('Content-type','application/json')
       res.json(details)
   },(err) => next(err)).catch((err) => next(err))
});



module.exports = userloginRouter;
