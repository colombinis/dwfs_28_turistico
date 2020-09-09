let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let edad = document.getElementById('edad');
let contrase = document.getElementById('contrasena');
let btnRegistrar = document.getElementById('registerBtn');

//correo.value = "emailemail.com";

let nombreRegistro = nombre.value;
let apellidoRegistro = apellido.value;
let correoRegistro = correo.value;
let edadRegistro = edad.value;
let contresaRegistro = contrase.value;

//correo.value = "emailemail.com";


function validarNombre(nombre) {
    if (nombre.length < 3) {
        return false;
    } else {
        return true;
    }
}

btnRegistrar.addEventListener('click', () => {
    //alert('ok');
 
    if(sumbit() == true){
    correoRegistro = correo.value;
    nombreRegistro = nombre.value;
    apellidoRegistro = apellido.value;
    edadRegistro = edad.value;
    contraseRegistro = contrase.value;
    checkDatosBack(nombreRegistro,
     apellidoRegistro,
     edadRegistro,
     correoRegistro,
     contraseRegistro);
     alert('ok');
 } else{alert('error')}
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
        //alert(com);
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

function validarContrase(contrase) {
    if(contrase.length < 6) {
        return false;
    }else{
        return true;
    }
}

function sumbit(){
    
    correoRegistro = correo.value;
    nombreRegistro = nombre.value;
    apellidoRegistro = apellido.value;
    edadRegistro = edad.value;
    contraseRegistro = contrase.value;


    let correoCheck = validarCorreo(correoRegistro);
    let edadCheck = validarEdad(edadRegistro);
    let nombreCheck = validarNombre(nombreRegistro);
    let apellidoCheck = validarApellido(apellidoRegistro);
    let contraseCheck = validarContrase(contraseRegistro);

    if(correoCheck == false ||
        edadCheck == false ||
        nombreCheck == false ||
        apellidoCheck == false ||
        contraseCheck == false){
            return  false;
        } else {
            return true;
        }
}


function checkDatosBack(nombre, apellido, edad, mail, password) {
    alert(nombre, apellido, edad, mail, password);



    const url = 'http://localhost:3001/usuario/crear';
    const data = {
        nombre: nombre, 
        apellido: apellido,
        edad: edad,
        mail: mail,
        password: password};
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    
    })
    .then(res => {

        console.log(res);
        if(res.status == '200'){
        return res.json()
        }
    })
    .then(response => {
        if(response){
        console.log('Success:', response)
        //localStorage.setItem('token', response.token);
        //localStorage.setItem('usuario', response.usuario);
        location.href = './login.html'
        }
        
    })
    .catch(error => console.log('Error:', error));
}





