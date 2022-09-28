//criação da rota
'use strict'

const express = require('express')
const router = new express.Router();

//endpoint
router.get('/', (req, res, next)=>{
    res.status(200).send({
        "nome":"Danielle",
        "idade": 30
    })
});

module.exports = router;
