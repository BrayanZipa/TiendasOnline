const db = require("./firebase");

function getUsers(callback){
    return db.collection("users").get()
    .then((refDoc)=>{
        var array = [];
        refDoc.forEach(doc=>{
            //console.log(doc.id, '=>', doc.data());
            array.push(doc.data());
        })
        callback(array);
    })
    .catch((err)=>{
        //console.error("Error", error);
        callback("Error al consultar",err);
    })
}

function getUser(id, callback){
    return db.collection("users").doc(id).get()
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

function addUsers(user, callback){
    return db.collection("users").add(user)
    .then(()=>{
        callback("Usuario guardado con exito");
    })
    .catch((err)=>{
        callback("Error al añadir al usuario",err);
    })
}

function updateUsers(id, user, callback){
    return db.collection("users").doc(id).set(user)
    .then(()=>{
        callback("Usuario actualizado con exito");
    })
    .catch((err)=>{
        callback("Error al actualizar al usuario",err);
    })
}

function updateUsers2(id, user, callback){
    return db.collection("users").doc(id).update(user)
    .then(()=>{
        callback("Usuario actualizado con exito");
    })
    .catch((err)=>{
        callback("Error al actualizar al usuario",err);
    })
}

function deleteUser(id, callback){
    return db.collection("users").doc(id).delete()
    .then(()=>{
        callback("Usuario eliminado con exito");
    })
    .catch((err)=>{
        callback("Error al eliminar al usuario",err);
    })
}


module.exports = {
    getUsers,
    getUser,
    addUsers,
    updateUsers,
    updateUsers2,
    deleteUser
}