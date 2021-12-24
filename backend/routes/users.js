const express = require("express");
const router = express.Router();
const dbUser = require("../src/db/UserCrud");

router.get('/', (req, res)=>{  
    dbUser.getUsers(function(array){
        res.send(array);
    })
})

router.get('/:id', (req, res)=>{  
    const id = req.params.id;
    dbUser.getUser(id, function(doc){
        res.send(doc);
    })
})

router.post('/', (req, res)=>{
    const user = req.body;
    dbUser.addUsers(user, function(response){ 
        if(response == 'Usuario guardado con exito'){
            res.status(201).send(response);
        }else{
            res.status(400).send(response);
        }
    }) 
})

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const user = req.body;
    dbUser.updateUsers(id, user, function(response){
        res.send(response);
    })
})

router.patch('/:id', (req, res)=>{
    const id = req.params.id;
    const user = req.body;
    dbUser.updateUsers2(id, user, function(response){
        res.send(response);
    })
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    dbUser.deleteUser(id, function(response){
        res.send(response);
    })
})

module.exports = router;