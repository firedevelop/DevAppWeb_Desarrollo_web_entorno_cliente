var bet = new Perro("Beethoven", 2, "sanbernardo", "GUUF");

console.log(perruedines.color);
console.log(bet.color);
console.log(ayudante.color);

Perro.prototype.color = "blanco";
ayudante.color = "negro";

var pancho = new Object();

console.log(perruedines.color);
console.log(bet.color);
console.log(ayudante.color);
console.log(pancho.color);
console.log(pancho.declaracionRenta);

perruedines.color = "marron";
ayudante.color = "canela";

console.log(perruedines.color);
console.log(bet.color);
console.log(ayudante.color);
console.log(pancho.color);