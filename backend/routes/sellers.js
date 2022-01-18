const express = require("express");
const router = express.Router();
const dbSeller = require("../src/db/sellerCrud");

router.get("/", (req, res)=>{
    dbSeller.getSellers(function(array){
        res.send(array);
    })
})

router.get("/:id", (req, res)=>{
    const id = req.params.id;
    dbSeller.getSeller(id, function(doc){
        res.send(doc);
    })
})

router.post("/", (req, res)=>{
    const seller = req.body;
    dbSeller.addSellers(seller, function(response){
        if(response == 'Vendedor guardado con exito'){
            res.status(201).send(response);
        }else{
            res.status(400).send(response);
        }
    })
})

router.put("/:id", (req, res)=>{
    const id = req.params.id;
    const seller = req.body;
    dbSeller.updateSellers(id, seller, function(response){
        res.send(response);
    })
})

router.patch("/:id", (req, res)=>{
    const id = req.params.id;
    const seller = req.body;
    dbSeller.updateSellers2(id, seller, function(response){
        res.send(response);
    })
})

router.delete("/:id", (req, res)=>{
    const id = req.params.id;
    dbSeller.deleteSeller(id, function(response){
        res.send(response);
    })
})

module.exports = router;