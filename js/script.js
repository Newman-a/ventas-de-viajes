import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Funciones
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //Remover activo de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar activo al enlace correspondiente
        this.classList.add('active');

        //Traer la informacion del objeto correspondiente a la eleccion
        let contenido = obtenerContenido(this.textContent);

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });

    
});

//Funcion para traer la informacion correcta de las ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];
}