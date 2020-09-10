const mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost:27017/comision28');
mongoose.connect('mongodb://localhost:27017/comision28', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const Alumno = mongoose.model("estudiantes", {nombre: String, apellido: String, puntaje: Number});

function agregarusuario(){
let puntaje = Math.floor(Math.random() * 10 + 1);
const newalumno = new Alumno({nombre: "luis", apellido: "hinestroza", puntaje: puntaje});
newalumno.save();
}

function obtenerpuntaje(){
    return Math.floor(Math.random() * 10 + 1);
}
function modificarusuario(){
    Alumno.updateOne({nombre: "Gaston"}, { 
        puntaje: obtenerpuntaje()
    }, function(err, numberAffected, rawResponse) {
       //handle it
       console.log(err);
    })
}
function eliminarusuario(){
    Alumno.deleteOne({nombre: "antonella"},function(err, numberAffected, rawResponse){
        console.log(err);
    })
}
//modificarusuario();
eliminarusuario();