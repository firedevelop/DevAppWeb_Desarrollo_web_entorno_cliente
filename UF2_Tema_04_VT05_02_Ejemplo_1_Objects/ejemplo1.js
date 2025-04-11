var brian = {
    nombre: "Brian",
    nPatas: 4,
    raza: "beagle",
    ladra: function() {
        console.log("Hola Stewie");
    }
};

var ayudante = new Object();
ayudante.nombre = "Pequeño ayudante de Santa Claus";
ayudante.nPatas = 4;
ayudante.raza = "galgo";
ayudante.ladra = function() {
    console.log("Guau");
};

function Perro(nombre, nPatas, raza, ladrido) {
    this.nombre = nombre;
    this.nPatas = nPatas;
    this.raza = raza;
    this.ladra = function() {
        console.log(ladrido);
    }
}

var perruedines = new Perro("Perruedines", 2, "ratonero", ".");

console.log(brian.nombre);
brian.ladra();
console.log(ayudante.nombre);
ayudante.ladra();
console.log(perruedines.nombre);
perruedines.ladra();

