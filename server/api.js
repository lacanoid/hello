const api = module.exports = require('express').Router()

api.get('/hello', (req,res)=> {
    res.send('Hello!');    
})

