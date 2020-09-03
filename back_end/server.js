const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
const server = express();
const rateLimit = require("express-rate-limit");

//const archivos = require("./gestionArchivos");


server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
  });

server.use(limiter);

server.post('/usuario/login', function (req, res) {
    console.log(req.body);
    const mail = req.body.mail;
    const pass = req.body.password;
    // obtener leer el archivo con la lista de usuarios
    // verificar que el mail y password existan en esa lista
    // obtener mas informacion del usuario por ej -> nombre
    const nombre="Seba";

    res.status(200).json({msg:'login valido ', usuario: nombre});

});

server.get('/paquetes', function (req, res) {
    res.send('Get paquete');
});

server.post('/paquete', function (req, res) {
    console.log('Post paquete');
});

server.put('/paquete', function (req, res) {
    console.log('Put paquete');
});

server.delete('/paquete', function (req, res) {
    console.log('Delete paquete');
});

server.get('/paquete/:id', function (req, res) {
    archivos.appendFile('./test.txt', `${req.params.id}`);
    res.send('Get paquete id');
});


server.listen(3001, () => {
    console.log('Servidor puerto 3001');
});