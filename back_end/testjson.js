//guardar informacion en el archivo
// dado un objeto en js, lo transformo a texto lo guardo en archivo
 const gestionarchivos = require('./gestionArchivos');

//const listaUsuario = [];

/* const objUsuario = {
    nombre: 'anto',
    email: 'anto@email.com'
} */

/* listaUsuario.push(objUsuario);
listaUsuario.push(objUsuario);

const strObj = JSON.stringify(listaUsuario);

console.log(strObj);

 */
//writeFile(archivo, texto)
// appendFile(archivo, texto)

//gestionarchivos.appendFile('bd.txt', strObj);

const datos = gestionarchivos.readFile('bd.txt');

console.log(datos);

//pasar el texto a json 

const datoJson = JSON.parse(datos);

console.log(datoJson);