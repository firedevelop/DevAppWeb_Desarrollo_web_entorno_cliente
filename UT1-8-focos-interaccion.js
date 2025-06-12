var listaEnlaces = document.getElementsByTagName('u');

for (var i = 0; i < listaEnlaces.length; i++) {
    console.log(listaEnlaces[i].innerHTML); // Muestra el contenido de cada <u> en la consola al cargar la página
    listaEnlaces[i].onclick = function() {
        document.getElementById('eleccion').innerHTML = this.innerHTML;
        console.log("Cambio"); // Muestra "Cambio" en la consola cada vez que se hace clic
    }
}