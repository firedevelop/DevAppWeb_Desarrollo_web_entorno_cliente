// chartAt()
const saludo = "Hello, world!";
const letra = saludo.charAt(7);
console.log(letra); // "w"

// indexOf()
const mensaje = "Hello, world!";
const x1 = mensaje.indexOf("world");
console.log(x); // 7 
const x2 = mensaje.indexOf("x");
console.log(x2); // -1 (no se encuentra "x")
const x3 = mensaje.indexOf("l");
console.log(x3); // 2 (primer "l" en "Hello")

//Math.abs()
// Devuelve el valor absoluto de un número, es decir, sin el signo negativo.
console.log(Math.abs(-5))  // 5
console.log(Math.abs(10))  // 10
console.log(Math.abs(0))   // 0

let a = -8;
let b = 3;
let diferencia = Math.abs(a - b); // |-8 - 3| = |-11| = 11
console.log(diferencia); // 11

console.log(Math.abs(-4.7));  // 4.7
console.log(Math.abs(2.3));   // 2.3

// toFixed()
// El método toFixed() convierte un número a una cadena, redondeando a un número específico de decimales.
let num1 = 3.14159265;
console.log("Original num1:", num1);                 // Output: 3.14159265
console.log("num1.toFixed(2):", num1.toFixed(2));   // Output: "3.14" (rounded)
console.log("num1.toFixed(4):", num1.toFixed(4));   // Output: "3.1416" (rounded up)
console.log("num1.toFixed(0):", num1.toFixed(0));   // Output: "3" (rounded to nearest whole number)

// Date.parse()
// El método Date.parse() convierte una cadena de fecha en un número de milisegundos desde el 1 de enero de 1970 (Epoch)
const dateString = "2025-06-10T14:30:00Z";
const timestamp = Date.parse(dateString);
console.log(timestamp); // Output: 1754865000000 (milliseconds since Jan 1, 1970)
