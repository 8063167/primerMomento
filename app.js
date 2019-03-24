'use strict'
//improtan biliotecas para manejo de peticiones http y archivos json
let express = require('express');
let bodyParser = require('body-parser');
//Ejecuto express
let app = express();
// Cargar archivo de rutas
let projectRoutes = require('./Routes/ProjectRoutes');

app.use(express.urlencoded({extended:false}));
app.set('port', process.env.PORT || 3001);

app.get('./api/test',(req,res)=>{
    res.status(200).send({
        mensaje:"Hola mundo con api de node",
        bienvenida:"Felicidades"
    });
});
//rutas
app.use('/api',projectRoutes);
module.exports = app;

