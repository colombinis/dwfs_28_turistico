const express = require('express');
const server = express();
const archivos = require("./gestionArchivos");

server.listen(3000, () => {
    console.log('Servidor puerto 3000');
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

