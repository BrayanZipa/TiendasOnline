const express = require("express");
const router = express.Router();

const dbUser = require("../src/db/crud");
const axios = require('axios').default;


router.get('/', (req, res)=>{  
    dbUser.getUsers(function(array){
        res.send(array);
    });
});

router.get('/:id', (req, res)=>{  
    const eid = req.params.id;
    dbUser.getUser(eid, function(doc){
        res.send(doc);
    });
});

router.post('/', (req, res)=>{
    const user = req.body;
    const country = user.Pais;
    axios.get('https://restcountries.com/v3.1/name/'+country) //Por medio de una API y el pais que ingresa el usuario podeos almacenar su idioma sin pedirselo directamente al usuario
        .then(function (response) {
            user.Idioma = response.data[0].languages;
        })
        .catch(function (error) {
           res.status(400).send(error);
        })
        .then(function () {
            dbUser.addUsers(user, function(response){ 
                if(response == 'Usuario guardado con exito'){
                    res.status(201).send(response);
                }else{
                    res.status(400).send(response);
                }
            }) 
        });
})

router.put('/:id', (req, res)=>{
    const user = req.body;
    const eid = req.params.id;
    dbUser.updateUsers(eid, user, function(response){
        res.send(response);
    })
})

router.patch('/:id', (req, res)=>{
    const user = req.body;
    const eid = req.params.id;
    dbUser.updateUsers2(eid, user, function(response){
        res.send(response);
    })
})

router.delete('/:id', (req, res)=>{
    const eid = req.params.id;
    dbUser.deleteUser(eid, function(response){
        res.send(response);
    })
})

module.exports = router;