const express = require('express');
const server = express();

server.get('/', function (req, res) {
    res.send('Hola');
});

server.listen(3000, () => {
    console.log('Servidor puerto 3000');
});