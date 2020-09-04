let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let edad = document.getElementById('edad');
let contraseña = document.getElementById('contrasena');
let btnRegistrar = document.getElementById('registerBtn');

//correo.value = "emailemail.com";

let nombreRegistro = nombre.value;
let apellidoRegistro = apellido.value;
let correoRegistro = correo.value;
let edadRegistro = edad.value;
let contresañaRegistro = contraseña.value;

//correo.value = "emailemail.com";


function validarNombre(nombre) {

    if (nombre.length < 3) {

        return false;

    } else {

        return true;

    }
}

btnRegistrar.addEventListener('click', () => {
    correoRegistro = correo.value;
    nombreRegistro = nombre.value;
    apellidoRegistro = apellido.value;
    edadRegistro = edad.value;

    let correoCheck = validarCorreo(correoRegistro);
    let edadCheck = validarEdad(edadRegistro);
    let nombreCheck = validarNombre(nombreRegistro);
    let apellidoCheck = validarApellido(apellidoRegistro);
    let contraseñaCheck = validarContraseña(contresañaRegistro);


    alert(correoCheck);
    alert(nombreCheck);
    alert(edadCheck);
    alert(apellidoCheck);
    alert(contraseñaCheck);
    //alert(correoRegistro);

});


function validarApellido(apellido) {
    if (apellido.length < 2) {

        return false;

    } else {

        return true;

    }
}

function validarCorreo(correo) {

    if (emailIsValid(correo) == true) {
        let n = correo.indexOf('@');
        let endEmail = correo.slice(n, correo.length);
        let com = correo.slice(-4);
        alert(com);
        if (endEmail == '@gmail.com' ||
            endEmail == '@hotmail.com' ||
            endEmail == '@yahoo.com'||
            com != '.com'){

            return false;

        } else {
            return true;
        }

    } else {
        return false;
    };

}

function emailIsValid(email) {
    debugger;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarEdad(edad) {
    if(edad < 18 || edad >100 || isNaN(edad)){
        return false;
    }else{
        return true;
    }

}

function validarContraseña() {

}



