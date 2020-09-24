const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("dwfs28_turistico", "root", "", {
  host: "192.168.64.2",
  dialect: "mysql",
});

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

const Paquetes = sequelize.define(
  "paquetes",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    fecha_salida: {
      type: DataTypes.DATE,
      // allowNull defaults to truec
    },
    estado: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plazas_disponibles: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

async function agregar(nombreTabla, dataObjetos) {
    if(nombreTabla == 'paquetes'){
        //crear objeto tipo paquete
        //ese objeto va a tener el metodo create
    }
  const crear = await obj.create(dataObjetos);
  console.log(crear);
}

async function modificar(nombreTabla, dataObjetos) {
    // if(){

    // }
  const valor = dataObjetos.id;

  const modificar = await nombreTabla.update(dataObjetos, { where: { id: valor } });
  console.log(modificar);
}

async function consultar(nombreTabla, dataObjetos) {
    if(dataObjetos != null){
        const datos = await nombreTabla.findAll({
            attributes: ["id", "nombre", "fecha"],
          });
          console.log(datos);
    }
    else {
        const datos = await nombreTabla.findAll({
            attributes: ["id", "nombre", "fecha"],
          });
          console.log(datos);
    }
  }


// agregar(Paquetes, {
//   titulo: req.body.titulo,
//   descripcion: req.body.descripcion,
//   fecha_salida: req.body.fecha_salida,
//   estado: req.body.estado,
//   precio: req.body.precio,
//   plazas_disponibles: req.body.plazas_disponibles,
// });

// modificar(Paquetes, {
//     id: 1,
//     titulo: 'Paquete prueba'
// })

module.exports = {
  agregar,
  modificar,
};


// bdatos.agregar('paquetes', { prop1:valor1 , prop2:boolean  }) // trae todos los pa
// bdatos.consultar('paquetes' ,{id:123}) // trae todos los pa
// bdatos.modificar('paquetes' ,{id:123} , { prop1:valor1 , prop2:boolean  } ) // trae todos los pa
// bdatos.eliminar('paquetes'  ,{id:123}) // trae todos los pa
