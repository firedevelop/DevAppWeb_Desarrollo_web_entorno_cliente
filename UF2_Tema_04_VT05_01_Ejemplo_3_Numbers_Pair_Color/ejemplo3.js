// Añadimos funcionalidad al primer boton
document.getElementsByTagName('button')[0].onclick = function() {
    // Cogemos el valor del input
    let entrada = document.getElementsByTagName('input')[0].value;
    crearLista(entrada);
};

var objetivo = document.getElementById('resultado');

function crearLista(repeticiones) {
    console.log("Genero la lista");
    // Iniciamos el elemento lista.
    objetivo.innerHTML = "<ol>";
    // Creamos tantos elementos en la lista como se hayan instroducido.
    for (var i = 0; i < repeticiones; i++) {
        // Genero un número entero aleatorio.
        let numero = parseInt(Math.random() * 10);
        // Creo el elemento.
        objetivo.innerHTML += "<li>" + String(numero) + "</li>";
    }
    // Cierro la lista.
    objetivo.innerHTML += "</ol>";

    // Selecciono todos los elementos li creados. Tiene que definirse aquí porque hasta este momento no existen.
    let elementosCreados = document.getElementsByTagName('li');

    // Función que hace que si un elemento es par, le añade la clase "rojo"
    function cambiaColorSiEsPar(elemento) {
        if (parseInt(elemento.innerHTML) % 2 == 0) {
            console.log("cambia");
            elemento.classList.add("rojo"); // Las clases es una lista de valores con todas las clases que tiene un elemento.
        }
    }

    // Recorro todos los elementos <li> y les cambia la clase si es necesario.
    for (var i = 0; i < elementosCreados.length; i++) {
        cambiaColorSiEsPar(elementosCreados[i]);
    }

    // Una vez cambiada la clase, inicializamos el otro botón con una función anónima.
    document.getElementById('colorear').onclick = function() {
        console.log("Ejecuta");
        // Saco en una lista todos los elementos con la clase "rojo"
        let listaRojos = document.getElementsByClassName("rojo");
        // Los recorro y les voy cambiando el fondo.
        for (var i = 0; i < listaRojos.length; i++) {
            listaRojos[i].style.backgroundColor = "red";
        }
    }
}