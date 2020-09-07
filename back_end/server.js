const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const rateLimit = require("express-rate-limit");

const archivos = require("./gestionArchivos");

server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

/* const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 10 // limit each IP to 10 requests per windowMs
}); */

//server.use(limiter);

server.use(function (req, res, next) {
    next();
});

//Acciones para el usuario
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

server.post('/usuario/crear', function (req, res) {
    // Recibir json del usuario nuevo 
    const jsonTexto = JSON.stringify(req.body);

    // Modificar el json para que tenga el mismo formato q la otra info dentro del archivo test.txt

    // Guardar esos datos en el test.txt para futura consulta de login
    archivos.appendFile('test.txt', jsonCorregido);
    console.log(jsonTexto);
    
    res.status(200).json({ msg: 'usuario creado'});
})



//navegacion sitio
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





//Servidor 
server.listen(3001, () => {
    console.log('Servidor puerto 3001');
});