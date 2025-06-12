var botonInsertar = document.getElementById('insertar'); // Selecciono el botón "insertar"
var contenidoCampoTexto = document.getElementsByTagName('input')[0]; // Selecciono el input
var textoFijo = document.getElementsByClassName('insertado')[0]; // Selecciono el texto a modificar

botonInsertar.onclick = function () {
    textoFijo.innerHTML = contenidoCampoTexto.value;
};

grande.onclick = function () {
    // Obtengo el tamaño actual (ej: "200%")
    var tamano = textoFijo.style.fontSize;
    tamano = tamano.substring(0, tamano.length - 1); // Elimino el símbolo "%"
    tamano = parseInt(tamano) + 5; // Aumento en 5
    tamano = tamano + "%"; // Le añado de nuevo el símbolo "%"
    textoFijo.style.fontSize = tamano; // Aplico el nuevo tamaño
    console.log(tamano); // Muestra el tamaño en consola
};

pequeno.onclick = function () {
    var tamano = textoFijo.style.fontSize;
    tamano = tamano.substring(0, tamano.length - 1); // Elimino el símbolo "%"
    tamano = parseInt(tamano) - 5; // Disminuyo en 5
    tamano = tamano + "%";
    textoFijo.style.fontSize = tamano;
    console.log(tamano);
};
