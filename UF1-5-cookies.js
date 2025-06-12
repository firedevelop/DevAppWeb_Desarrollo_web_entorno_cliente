// Crear objeto tipo fecha (la fecha actual)
let hoy = new Date();

// Obtener los milisegundos de la fecha actual y sumar una semana (7 días)
let caducidadMs = hoy.getTime() + 1000 * 60 * 60 * 24 * 7;

// Crear una nueva fecha con la fecha de caducidad
let caducidad = new Date(caducidadMs);

// Establecer una cookie con fecha de expiración en formato UTC
document.cookie = `usuario=ilerna;expires=${caducidad.toUTCString()}`;

// Muestra todas las cookies del documento
console.log(document.cookie); 
// output: "usuario=ilerna; expires=Thu, 07 Nov 2024 12:00:00 GMT" (la fecha puede variar según el momento actual)