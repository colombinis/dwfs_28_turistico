let ingresar = document.getElementById('ingresar');
let clave = document.getElementById('clave');
let usuario = document.getElementById('usuario')
//variable para chequear si hay errores o no
let hayErrores = false;

usuario.addEventListener('invalid', (event) => {
    hayErrores = true;
}) 

clave.addEventListener('invalid', (event) => {
    event.target.setCustomValidity('La contraseña debe tener al menos 8 caracteres y al menos un número');
    hayErrores = true;
}) 

ingresar.addEventListener('click', (event) => {
    // event.preventDefault();
    let mail = usuario.value
    let password = clave.value;

    if(!hayErrores){
        if(checkDatosBack(mail, password)){
                location.href = './index.html'
               }
        else {
                alert('El mail o la contraseña no coinciden con un usuario registrado')
        }
    }
    else {
        alert('El mail o la contraseña no tienen el formato correcto')
    }
})



function checkDatosBack (mail, password) {
    if (mail == 'error@acamica.com') {
        return false;
    }
    return true;
} 
