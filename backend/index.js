const RouterAPI = require('./routes/index')

const express = require("express");
var cors = require('cors');
const app = express();
const port = 5000;
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

RouterAPI(app);

app.listen(port, ()=>{ 
    console.log("Servidor escuchando en el puerto "+port);
});
