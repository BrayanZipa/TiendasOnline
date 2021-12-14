const RouterAPI = require('./routes')

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());

RouterAPI(app);

app.listen(port, ()=>{ 
    console.log("Servidor escuchando en el puerto "+port);
});
