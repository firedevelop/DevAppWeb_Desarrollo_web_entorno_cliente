var listaTemas = ["_jaMrkUNPaU", "sxf821vFHLg", "tY8nZjPxN14", "i6g3S5tI8aY"];

function enlaceYouTube(codigo) {
    if (!codigo || typeof codigo !== "string") {
        console.error("Invalid YouTube code:", codigo);
        return "#"; // Return a fallback value if the code is invalid
    }
    return "https://www.youtube.com/watch?v=" + codigo;
}

// Clase para manejar enlaces, artistas y códigos. (Now animals and YouTube codes)
class enlaceCancion {
    constructor(contenido, codigo) {
        this.contenido = contenido;
        this.codigo = codigo;
        this.enlace = enlaceYouTube(this.codigo);
    }

    convierteAEnlace(posicion) {
        return `
            <span>${this.contenido}</span>
            <button id='btn-${posicion}' onclick="window.open('${this.enlace}', '_blank', 'noopener,noreferrer')">Go to YouTube</button>
        `;
    }

    get convierteAImagen() {
        return `img/${this.contenido}.jpg`;
    }
}

function convertirAEnlaces() {
    let listaElementos = document.getElementsByTagName("li");
    for (var i = 0; i < listaElementos.length; i++) {
        // Ensure listaTemas has a corresponding YouTube code for each <li>
        if (!listaTemas[i]) {
            console.error(`No YouTube code found for list item at index ${i}`);
            continue;
        }

        // Create an object to use its methods
        let elementoNuevo = new enlaceCancion(listaElementos[i].innerHTML, listaTemas[i]);
        listaElementos[i].innerHTML = elementoNuevo.convierteAEnlace(i);

        // Set the image source on mouseover
        let valorImagen = elementoNuevo.convierteAImagen;
        listaElementos[i].addEventListener("mouseover", function () {
            document.getElementsByTagName("img")[0].src = valorImagen;
        }, false);
    }

    // "Remove" the PULSAME button
    document.getElementById("pulsa").innerHTML = "";
}

// Add functionality to the PULSAME button
var botonPulsame = document.getElementById("pulsa");
if (botonPulsame) {
    botonPulsame.addEventListener("click", convertirAEnlaces, false);
} else {
    console.error("Button with ID 'pulsa' not found.");
}