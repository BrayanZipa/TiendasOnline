const express = require("express");
const router = express.Router();
var db = require('./mockUsers.json')


router.get('/', (req, res)=>{  
    res.send(db);
});

router.get('/:id', (req, res)=>{  
    const eid = req.params.id;
    var user = db.filter(function(obj){
        return obj.id === eid;
    })
    res.send(user[0]);
});

router.post('/', (req, res)=>{
    const user = req.body;
    user.id = String(db.length + 1);
    //user.id = String(Number(db[db.length-1].id) + 1);
    db.push(user);
    res.send("Usuario almacenado con exito");
})

router.put('/:id', (req, res)=>{
    const eid = req.params.id;
    const user = req.body;
    user.id = eid;
    for (let i = 0; i < db.length; i++) {
        if(db[i].id === eid){
            db[i] = user;
            break;
        } 
    }
    res.send("Usuario actualizado con exito");
})

router.patch('/:id', (req, res)=>{

})

router.delete('/:id', (req, res)=>{
    const eid = req.params.id;
    var array = [];
    var contador = 1;
    for (let i = 0; i < db.length; i++) {
        var element = db[i];
        if(element.id != eid){
            element.id = String(contador);
            contador++;
            array.push(element);
        } 
    }
    db = array;
    res.send("Usuario eliminado con exito");
})

module.exports = router;