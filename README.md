# Trabajo integrador paquetes turisticos

### Paquete turistico (atributos)
* id
* titulo
* descripcion
* fecha_salida
* estado
* precio
* plazas_disponibles

### Usuario
* nombre
* email (dato unico)
* password
* edad

#### Front-end (publico):
* pantalla de registro
* pantalla de login
* pantalla de lista paquete turistico (disponible y no disponible)
* pantalla compra paquete turistico

#### Front-end (admin):


#### Back-end (solo admin):
* ABM de paquetes turisticos (get, post , put , delete) /paquetes

#### Back-end (usuarios):
* /usuario/crear
* /usuario/login
* /productos (lista de paquetes turisticos)
* /productos/:id (se ve el detalle del paquete seleccionado)
* /compra (paquete turistico seleccionado y se descuenta la plaza de las disponibles)

# Requerimientos
* no se utiliza ningun framework front-end
* se deben guardar los datos en un archivo de texto en formato json
* no se pueden registrar 2 usuarios con el mismo email
* no se permiten registros de emails con ( @gmail.com , @hotmail.com )

### G1: front-end

### G2: back-end
