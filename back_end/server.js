const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");

const usuarios = require("./gestion-usuarios");
const paquetes = require("./gestion-paquetes");

const bdatos = require('./factoryBaseDatos');

// bdatos.agregar('paquetes', { prop1:valor1 , prop2:boolean  }) // trae todos los pa
// bdatos.consultar('paquetes' ,{id:123}) // trae todos los pa
// bdatos.modificar('paquetes' ,{id:123} , { prop1:valor1 , prop2:boolean  } ) // trae todos los pa
// bdatos.eliminar('paquetes'  ,{id:123}) // trae todos los pa



// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/proyecto", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

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

//url para ver todos los usuarios
server.get("/usuarios", async function (req, res) {
  const listaUsuarios = await usuarios.obtenerUsuarios();
  res.send(listaUsuarios);
});

//Acciones para el usuario
server.post("/usuario/login", async function (req, res) {
  //traigo el mail y pass del usuario
  const mail = req.body.mail;
  const pass = req.body.password;

  //leer el archivo de base de datos
  const bdUsuarios = await usuarios.obtenerUsuarios();

  //recorrer el array json y verificar q exista el email y pw
  const find = bdUsuarios.find(function (element) {
    return element.mail === mail && element.password === pass;
  });

  console.log("find ", find);

  //si existe, genero jwt y resp 200
  //si no existe envio error 404
  if (find) {
    const name = find.nombre;
    const apellido = find.apellido;
    const edad = find.edad;

    //obtener la info y generar el JWT con la info del usuario
    const informacion = {
      nombre: name,
      apellido: apellido,
      edad: edad,
      mail: mail,
      password: pass,
    };
    const firma = "holasegura";
    const token = jwt.sign(informacion, firma);
    console.log(token);

    res.status(200).json({ msg: "login valido ", usuario: name, token: token });
  } else {
    res.status(404).json({ msg: "login invalido" });
  }
});

server.post('/usuario/crear', async function (req, res) {
  //traigo el dato mail ingresado
  const mailRegistro = req.body.mail;

  //chequeo si existe el mail en la base de datos
  const bdUsuariosRegistro = await usuarios.obtenerUsuarios();
  const find = bdUsuariosRegistro.find(function (element) {
    return element.mail === mailRegistro;
  });

  //si existe, devuelvo error, q intente con otro mail
  //si no existe, creo el usuario
  if (find) {
    res.status(404).json({ msg: "mail ya existente. pruebe con otro.", mail: mailRegistro });

  } else {
    //agrego usuarios mediante la fx definida en gestion-usuarios.js
    usuarios.agregarUsuario(req);

    //validacion: si se creo el usuario, dar res.200
    res.status(200).json({ msg: 'usuario creado', nombre: req.body.nombre });
  }
})



//ACCIONES PAQUETES (ADMIN)
//obtener lista de paquetes
server.get("/paquetes", async function (req, res) {
  const listaPaquetes = await paquetes.obtenerPaquetes();
  res.send(listaPaquetes);
});

//agregar un paquete
server.post("/paquetes", function (req, res) {
  //agrego paquete turistico mediante la fx definida en gestion-paquetes.js
  bdatos.agregar('paquetes', {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    fecha_salida: req.body.fecha_salida,
    estado: req.body.estado,
    precio: req.body.precio,
    plazas_disponibles: req.body.plazas_disponibles,
  });

  //validacion: si se creo el paquete, dar res.200
  res.status(200).json({ msg: 'paquete creado', titulo: req.body.titulo });
  res.status(404).json({ msg: 'paquete no creado', titulo: req.body.titulo });
});

//modificar el precio de un paquete
server.put("/paquetes", function (req, res) {
  const idPaquete = req.body.id;
  const nuevoPrecio = req.body.precio;

  paquetes.modificarPrecioPaquete(idPaquete, nuevoPrecio);
  res.status(200).json({ msg: 'precio actualizado', paquete: idPaquete, precio: nuevoPrecio });
  res.status(404).json({ msg: 'precio no actualizado', paquete: idPaquete });
});

//eliminar un paquete
server.delete("/paquetes", function (req, res) {
  //se pasa como parametro el titulo del paquete a eliminar
  const idPaquete = req.body.id;

  paquetes.eliminarPaquete(tituloPaquete);
  res.status(200).json({ msg: 'paquete eliminado', paquete: idPaquete });
  res.status(404).json({ msg: 'paquete no eliminado', paquete: idPaquete });
});





//acciones para ver los paquetes turistico
server.get("/productos", async function (req, res) {
  //lista de paquetes turisticos disponibles
  const listaPaquetes = await paquetes.obtenerPaquetes();
  res.send(listaPaquetes);
});

server.get("/producto/:id", function (req, res) {
  //archivos.appendFile("./test.txt", `${req.params.id}`);
  res.send("Get paquete id");
});




//Servidor
server.listen(3001, () => {
  console.log("Servidor puerto 3001");
});
