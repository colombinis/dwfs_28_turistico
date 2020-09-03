let ingresar = document.getElementById('ingresar');
let clave = document.getElementById('clave');
let usuario = document.getElementById('usuario')
//variable para chequear si hay errores o no
let hayErrores = true;

usuario.addEventListener('change', (event) => {
    //hayErrores = true;
})

clave.addEventListener('change', (event) => {
    //event.target.setCustomValidity('La contraseña debe tener al menos 8 caracteres y al menos un número');
    //hayErrores = true;
})

ingresar.addEventListener('click', (event) => {
    // event.preventDefault();
    let mail = usuario.value
    let password = clave.value;

    hayErrores = validarValoresIngresados(mail, password);

    if (!hayErrores) {
        checkDatosBack(mail, password)
        // if (checkDatosBack(mail, password)) {
        //     //location.href = './index.html'
        // }
        // else {
        //     alert('El mail o la contraseña no coinciden con un usuario registrado')
        // }
    }
    else {
        alert('El mail o la contraseña no tienen el formato correcto')
    }
})


function validarValoresIngresados(mail, password){
    //TODO: realizar la validacion de los campos ingresados por el usuario

    return false;
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
        debugger

        console.log('Success:', response)

        location.href = './index.html'

    })
    .catch(error => console.log('Error:', error));

    // if (mail == 'error@acamica.com') {
    //     return false;
    // }
    //return true;
}
