const mongoose = require("mongoose");

const Usuario = mongoose.model("usuarios", {
  nombre: String,
  apellido: String,
  edad: Number,
  mail: String,
  password: String,
});

async function obtenerUsuarios() {
  const Usuarios = await Usuario.find({});
  // console.log(Usuarios)
  return Usuarios;
}


function agregarUsuario(req) {
  //nuevo usuario en base de datos
  const nuevoUsuario = new Usuario(
    {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
      mail: req.body.mail,
      password: req.body.password
    }
  );
  nuevoUsuario.save();
}


/* function modificarUsuario() {
  Usuario.updateOne(
    { nombre: "Gaston" },
    {
      puntaje: obtenerpuntaje(),
    },
    function (err, numberAffected, rawResponse) {
      //handle it
      console.log(err);
    }
  );
}

function eliminarUsuario() {
  Usuario.deleteOne(
    { nombre: "antonella" }, 
    function (err) {
    console.log(err);
  });
}
 */

module.exports = {
  agregarUsuario,
  obtenerUsuarios
};