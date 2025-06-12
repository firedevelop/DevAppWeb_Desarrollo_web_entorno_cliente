// Crear objeto tipo fecha (la fecha actual)
let hoy = new Date();

// Obtener los milisegundos de la fecha actual y sumar una semana (7 días)
let caducidadMs = hoy.getTime() + 1000 * 60 * 60 * 24 * 7;
// output: 1730966400000 (esto varía según la fecha actual)

// Crear una nueva fecha con la fecha de caducidad
let caducidad = new Date(caducidadMs);
// JavaScript automáticamente llama a toString() cuando imprimes un objeto Date en consola
console.log(caducidad);             // Thu Nov 07 2024 12:00:00  // Usa implícitamente caducidad.toString()
console.log(caducidad.toString()); // Thu Nov 07 2024 12:00:00  // Es lo mismo


// Establecer una cookie con fecha de expiración en formato UTC
document.cookie = `usuario=ilerna;expires=${caducidad.toUTCString()}`;

// Muestra todas las cookies del documento
console.log(document.cookie); 
// output: "usuario=ilerna; expires=Thu, 07 Nov 2024 12:00:00 GMT" (la fecha puede variar según el momento actual)