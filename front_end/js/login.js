let ingresar = document.getElementById('ingresar');
let clave = document.getElementById('clave')

clave.addEventListener('invalid', (event) => {
    event.target.setCustomValidity('La contraseña debe tener al menos 8 caracteres y al menos una minúscula, una mayúscula y un número');
}) 


ingresar.addEventListener('click', () => {
    let usuario = document.getElementById('usuario').value
     clave = document.getElementById('clave').value

    if(checkDatosFront(usuario,clave)){
        if(checkDatosBack(usuario, clave)){
            // window.location = './'
        }
        else {
            alert('El usuario o la contraseña contienen errores')
          
        }
    }
    else {
        alert('La contraseña debe contener mayuscula, minuscula, caracter especial')
    }
})

function checkDatosFront (usuario, clave){
        return true
}

function checkDatosBack (usuario, clave) {
    if (usuario == 'error@acamica.com') {
        return false;
    }
    return true;
}