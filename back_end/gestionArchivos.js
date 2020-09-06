const readline = require('readline');
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
    fs.readFile(archivo, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    })
}

function appendFile(archivo, texto) {
    fs.appendFile(archivo, texto, function (err) {
        if (err) throw err;
        console.log('Archivo guardado!');
    });
}

function readFileLine(archivo) {
    fs.readFile(archivo, function (err, data) {
        if (err) throw err;
        var array = data.toString().replace(/\r\n/g, '\n').split('\n');
        console.log(array);
    });
}

function readFileLineJson(archivo, callback) {
    fs.readFile(archivo, function (err, data) {
        if (err) throw err;
        var array = data.toString().replace(/\r\n/g, '\n');
        var lines = array.split("\n");
        var data_json = [];
        var tmp;

        for (var index in lines) {
            tmp = lines[index].trim().split(" ");
            data_json.push({
                "mail": tmp[0].toString(),
                "password": tmp[1].toString(),
                "name": tmp[2].toString()
            });
        }
        callback(null, data_json);
    });
}

module.exports = {
    writeFile,
    readFile,
    appendFile,
    readFileLine,
    readFileLineJson
}