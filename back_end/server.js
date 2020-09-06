const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
const server = express();
const rateLimit = require("express-rate-limit");

const archivos = require("./gestionArchivos");

server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 10 // limit each IP to 10 requests per windowMs
});

server.use(limiter);

server.use(function (req, res, next) {
    next();
});

server.post('/usuario/login', function (req, res) {
    const mail = req.body.mail;
    const pass = req.body.password;
    archivos.readFileLineJson('test.txt', function (err, result) {
        var name = '';
        var find = result.filter(function (element) {
            return element.mail === mail && element.password === pass;
        });
        name = find[0].name;
        res.status(200).json({ msg: 'login valido ', usuario: name });
    });
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