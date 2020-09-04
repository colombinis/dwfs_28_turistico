let ingresar = document.getElementById('ingresar');
let clave = document.getElementById('clave');
let usuario = document.getElementById('usuario')
//variable para chequear si hay errores o no
let hayErrores = true;
let usuarioError = true;
let claveError = true;
let dominiosInvalidos = ["@gmail.","@yahoo.","@hotmail.","@live.","@outlook."];


usuario.addEventListener('change', (event) => {
    if(usuario.value != "" && validateEmail(usuario.value)) {
        usuarioError = false;
    }
})

function validateEmail(email){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) 
    {
        return false;
    }
    return true;
}

clave.addEventListener('change', (event) => {
    if(clave.value.length < 6) {
        claveError = false;
    }
})

ingresar.addEventListener('click', (event) => {
    // event.preventDefault();
    let mail = usuario.value;
    let password = clave.value;

    hayErrores = validarValoresIngresados();

    if (!hayErrores) {
        checkDatosBack(mail, password)
    }
    else {
        if(usuarioError) {
            document.getElementById('errorUsuario').style.display = 'block'
        }
        else {
            document.getElementById('errorUsuario').style.display = 'none'
        }
         if (claveError) {
            document.getElementById('errorClave').style.display = 'block'
        }
        else {
            document.getElementById('errorClave').style.display = 'none'
        }
    }
})


function validarValoresIngresados(){
    //TODO: realizar la validacion de los campos ingresados por el usuario
    return usuarioError || claveError;
}

function checkDatosBack(mail, password) {

    const url = 'http://localhost:3001/usuario/login';
    const data = { mail: mail, password: password };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        console.log('Success:', response)
        location.href = './index.html'
    })
    .catch(error => console.log('Error:', error));
}