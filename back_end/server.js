const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const rateLimit = require("express-rate-limit");
const jwt = require('jsonwebtoken');

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

    //validar q exista el usuario y contra

    //obtener la info y generar el JWT con la info del usuario

    /* archivos.readFileLineJson('bd.txt', function (err, result) {
        var name = '';

        var find = result.filter(function (element) {
            return element.mail === mail && element.password === pass;
        });
        name = find[0].name;

        if (find) {

            const informacion = {
                nombre: name,
                mail: mail,
                password: pass
            };

            const firma = "holasegura";

            const token = jwt.sign(informacion, firma)

            console.log(token);

            res.status(200).json({ msg: 'login valido ', usuario: name });

        } else {
            res.status(404).json({ msg: 'login invalido '});
        }
    }); */



    //leer el archivo de base de datos bd.txt, traerlo en varuable
    const strArray = archivos.readFile('bd.txt');

    //variable de texto convertirla a json
    const arrayJson = JSON.parse(strArray);

    //recorrer el array json y verificzr q exista el email y pw
    const find = arrayJson.find(function (element) {
        return element.mail === mail && element.password === pass;
    });

    console.log("json find ", find);

    //si existe, genero jwt y resp 200
    //si no existe envio error 404

    if (find) {

        const name = find.nombre;

        const informacion = {
            nombre: name,
            mail: mail,
            password: pass
        };

        const firma = "holasegura";

        const token = jwt.sign(informacion, firma)

        console.log(token);

        res.status(200).json({ msg: 'login valido ', usuario: name, token: token });

    } else {
        res.status(404).json({ msg: 'login invalido ' });
    }

});

server.post('/usuario/crear', function (req, res) {
    // Recibir json del usuario nuevo 
    const jsonTexto = JSON.stringify(req.body);

    // Modificar el json para que tenga el mismo formato q la otra info dentro del archivo test.txt

    // Guardar esos datos en el test.txt para futura consulta de login
    archivos.appendFile('test.txt', jsonCorregido);
    console.log(jsonTexto);

    res.status(200).json({ msg: 'usuario creado' });
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