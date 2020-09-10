const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const archivos = require("./gestionUsuarios");
const usuarios = require("./gestionUsuarios");

mongoose.connect("mongodb://localhost:27017/proyecto", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

/* 
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 10 // limit each IP to 10 requests per windowMs
}); 

server.use(limiter); 
*/

server.use(function (req, res, next) {
  next();
});

//Acciones para el usuario
server.post("/usuario/login", function (req, res) {
  //traigo el mail y pass del usuario
  const mail = req.body.mail;
  const pass = req.body.password;

  //leer el archivo de base de datos bd.txt, traerlo en variable
  //variable de texto convertirla a json
  const strArray = archivos.readFile("bd.txt");
  const arrayJson = JSON.parse(strArray);

  //recorrer el array json y verificzr q exista el email y pw
  const find = arrayJson.find(function (element) {
    return element.mail === mail && element.password === pass;
  });

  console.log("find ", find);

  //si existe, genero jwt y resp 200
  //si no existe envio error 404
  if (find) {
    const name = find.nombre;

    //obtener la info y generar el JWT con la info del usuario
    const informacion = {
      nombre: name,
      mail: mail,
      password: pass,
    };
    const firma = "holasegura";
    const token = jwt.sign(informacion, firma);
    console.log(token);

    res.status(200).json({ msg: "login valido ", usuario: name, token: token });
  } else {
    res.status(404).json({ msg: "login invalido " });
  }
});

server.post('/usuario/crear', function (req, res) {

    //nuevo usuario en base de datos
    const nuevoUsuario = new Usuario(
        {
            nombre: req.body.nombre,
            mail: req.body.mail,
            password: req.body.password
        }
    );
    nuevoUsuario.save();

    //traer los datos de usuarios ya creados desde el archivo bd.txt
    //parsear la info de bd.txt
    const usuariosExistentes = archivos.readFile('bd.txt');
    const usuariosExistentesArray = JSON.parse(usuariosExistentes);

    // Recibir json del usuario nuevo 
    //agregar el nuevo usuario al array de usuarios
    const nuevoUsuarioJson = req.body;
    usuariosExistentesArray.push(nuevoUsuarioJson);
    //console.log("usuarios actualizados: ", usuariosExistentesArray);

    //Reescribir el archivo bd.txt con el nuevo array de usuarios pasado a string
    const usuariosActualizadosStr = JSON.stringify(usuariosExistentesArray);
    archivos.writeFile('bd.txt', usuariosActualizadosStr);

    //validacion: si se creo el usuario, dar res.200
    res.status(200).json({ msg: 'usuario creado', nombre: req.body.nombre });

    //si NO se creo el usuario, dar res.404
})


//navegacion sitio
server.get("/paquetes", function (req, res) {
  res.send("Get paquete");
});

server.post("/paquete", function (req, res) {
  console.log("Post paquete");
});

server.put("/paquete", function (req, res) {
  console.log("Put paquete");
});

server.delete("/paquete", function (req, res) {
  console.log("Delete paquete");
});

server.get("/paquete/:id", function (req, res) {
  archivos.appendFile("./test.txt", `${req.params.id}`);
  res.send("Get paquete id");
});








server.get("/usuarios", async function (req, res) {
    const datos = await usuarios.obtenerUsuarios();
    console.log(datos);
  res.send(datos);
});






//Servidor
server.listen(3001, () => {
  console.log("Servidor puerto 3001");
});
