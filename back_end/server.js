const express = require('express');
const server = express();

server.get('/', function (req, res) {
    res.send('Bienvenido');
});

server.listen(3000, () => {
    console.log('Servidor puerto 3000');
});