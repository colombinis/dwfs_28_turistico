const mongoose = require("mongoose");

const Paquete = mongoose.model("paquetes", {
    id: mongoose.ObjectId,
    titulo: String,
    descripcion: String,
    fecha_salida: String,
    estado: String,
    precio: Number,
    plazas_disponibles: Number
});

async function obtenerPaquetes() {
    const Paquetes = await Paquete.find({});
    return Paquetes;
}


function agregarPaquete(req) {
    //nuevo paquete en base de datos
    const nuevoPaquete = new Paquete(
        {
            //id: req.body.id,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            fecha_salida: req.body.fecha_salida,
            estado: req.body.estado,
            precio: req.body.precio,
            plazas_disponibles: req.body.plazas_disponibles
        }
    );
    nuevoPaquete.save();
}

function modificarPrecioPaquete(idPaquete, nuevoPrecio) {
    Paquete.updateOne(
        { 
            _id: idPaquete 
        },
        {
            precio: nuevoPrecio,
        },
        function (err, numberAffected, rawResponse) {
            //handle it
            console.log(err);
        }
    );
}


function eliminarPaquete(idPaquete) {
    Paquete.deleteOne(
        {
            _id: idPaquete
        },
        function (
            err,
            numberAffected,
            rawResponse
        ) {
            console.log(err);
        });
}


module.exports = {
    obtenerPaquetes,
    agregarPaquete,
    modificarPrecioPaquete,
    eliminarPaquete
}