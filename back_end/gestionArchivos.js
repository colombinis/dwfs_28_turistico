let fs = require('fs');

function writeFile(archivo, texto) {
    fs.writeFile(archivo, texto, error => {
        if (error) {
            console.log(error)
        } else {
            console.log('El archivo fue creado');
        }
    });
}

function readFile(archivo) {
    fs.readFile(archivo, '', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            console.log(data);
        }
    });
}

function appendFile(archivo, texto) {
    fs.appendFile(archivo, texto, function (err) {
        if (err) throw err;
        console.log('Archivo guardado!');
    });
}

module.exports = {
    writeFile,
    readFile,
    appendFile
}