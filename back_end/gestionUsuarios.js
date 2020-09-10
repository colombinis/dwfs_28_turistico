const mongoose = require ("mongoose");

const Usuario = mongoose.model("usuarios", {
  nombre: String,
  apellido: String,
  puntaje: Number,
});

async function obtenerUsuarios(){
    const Usuarios = await Usuario.find({});
    // console.log(Usuarios)
    return Usuarios;
}

function agregarusuario() {
  let puntaje = Math.floor(Math.random() * 10 + 1);
  const newUsuario = new Usuario({
    nombre: "luis",
    apellido: "hinestroza",
    puntaje: puntaje,
  });
  newUsuario.save();
}

function obtenerpuntaje() {
  return Math.floor(Math.random() * 10 + 1);
}
function modificarusuario() {
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
function eliminarusuario() {
  Usuario.deleteOne({ nombre: "antonella" }, function (
    err,
    numberAffected,
    rawResponse
  ) {
    console.log(err);
  });
}
//modificarusuario();
// eliminarusuario();

module.exports = {
  agregarusuario,
  obtenerpuntaje,
  modificarusuario,
  eliminarusuario,
  obtenerUsuarios
};
