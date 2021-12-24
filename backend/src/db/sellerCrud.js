const db = require("./firebase");

function getSellers (callback){
    return db.collection("sellers").get()
    .then((refDoc)=>{
        var array = [];
        refDoc.forEach(doc=>{
            array.push(doc.data());
        })
        callback(array);
    })
    .catch((err)=>{
        callback("Error al consultar",err);
    })
}

function getSeller (id, callback){
    return db.collection("sellers").doc(id).get()
    .then((refDoc)=>{
        if(refDoc.exists){
            callback(refDoc.data());
        }else{
            callback("No hay data");
        }
    })
    .catch((err)=>{
        callback("Error al consultar",err);
    })
}

function addSellers(seller, callback){
    return db.collection("sellers").add(seller)
    .then(()=>{
        callback("Vendedor guardado con exito");
    })
    .catch((err)=>{
        callback("Error al añadir al vendedor",err);
    })
}

function updateSellers(id, seller, callback){
    return db.collection("sellers").doc(id).set(seller)
    .then(()=>{
        callback("Vendedor actualizado con exito");
    })
    .catch((err)=>{
        callback("Error al actualizar al Vendedor",err);
    })
}

function updateSellers2(id, seller, callback){
    return db.collection("sellers").doc(id).update(seller)
    .then(()=>{
        callback("Vendedor actualizado con exito");
    })
    .catch((err)=>{
        callback("Error al actualizar al Vendedor",err);
    })
}

function deleteSeller(id, callback){
    return db.collection("sellers").doc(id).delete()
    .then(()=>{
        callback("Vendedor eliminado con exito");
    })
    .catch((err)=>{
        callback("Error al eliminar al Vendedor",err);
    })
}

module.exports = {
    getSellers,
    getSeller,
    updateSellers,
    updateSellers2,
    addSellers,
    deleteSeller
}