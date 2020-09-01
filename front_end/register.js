let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let edad = document.getElementById('edad');
let contraseña = document.getElementById('contrasena');
let btnRegistrar = document.getElementById('registerBtn');

btnRegistrar.addEventListener('click', () => {
alert(nombre.value + apellido.value + correo.value + edad.value)});
