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

    if (nombre.string.length < 3) {

        return false;

    } else {

        return true;

    }
}

btnRegistrar.addEventListener('click', () => {
    correoRegistro = correo.value;
    let correocheck = validarCorreo(correoRegistro);
    alert(correocheck);
    //alert(correoRegistro);



});


function validarApellido(apellido) {
    if (apellido.length < 3) {

        return false;

    } else {

        return true;

    }
}

function validarCorreo(correo) {

    if (emailIsValid(correo) == true) {
        let n = correo.indexOf('@');
        let endEmail = correo.slice(n, correo.length);

        if (endEmail == '@gmail.com' ||
            endEmail == '@hotmail.com' ||
            endEmail == '@yahoo.com') {

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

function validarEdad() {

}

function validarContraseña() {

}



