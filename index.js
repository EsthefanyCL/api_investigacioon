const express = require('express')
require('dotenv').config();
const {dbConection} = require('./config/database')
const cors = require('cors');

//Crear el servidor express
const app = express();

app.use(cors());

//Establece conexion a la DB
dbConection();
//Verificando variable de entorno
//console.log(process.env);

//Rutas de la API proyectos
app.get('/',(req, res)=>{
  res.status(400).json({
      ok:true,
      msg:'Bienvenidos a Node.js'
  });
});
//Codigo para desplegar el servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor deplegado en el puerto:'+ process.env.PORT);
})
