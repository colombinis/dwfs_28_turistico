let lista = document.getElementById('paquetes');

function mostrarPaquetes(){
    const url = 'http://localhost:3001/paquetes';
    fetch(url)
    .then(res => {

    //     console.log(res);
    //     if(res.status == '200'){
        return res.json()
    //     }
    })
    .then(response => {
        response.forEach(element => {
            lista.innerHTML += `
            <li>
            <p>${element.titulo}</p>
            <p>${element.descripcion}</p>
            <p>${element.fecha_salida}</p>
            <p>${element.estado}</p>
            <p>${element.precio}</p>
            <p>${element.plazas_disponibles}</p>
            </li> 

            <button>Modificar</button>
            <button>Eliminar</button>
            

            `
            console.log(element)
        });
        }
        
    )
    .catch(error => console.log('Error:', error));
}

mostrarPaquetes();